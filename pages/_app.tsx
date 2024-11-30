import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { Chain } from 'wagmi/chains'

// Web3Modal project ID
const projectId = '02a231b2406ed316c861abefc95c5e59'

// Supported chains (use empty array for dynamic chain handling)
const supportedChains: Chain[] = []

// Configure Wagmi with jsonRpcProvider
const { publicClient } = configureChains(supportedChains, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!chain) {
        console.warn('Chain is undefined in RPC configuration') // Debugging for undefined chains
        return null
      }
      return { http: `https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID` } // Replace later
    },
  }),
])

// Create Wagmi configuration
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: supportedChains }), // Empty array for dynamic chains
  publicClient, // Dynamically connect to wallet's provided chain
})

// Initialize EthereumClient for Web3Modal
const ethereumClient = new EthereumClient(wagmiConfig, supportedChains)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
    </>
  )
}

export default MyApp
