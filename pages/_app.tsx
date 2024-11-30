import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// Web3Modal project ID
const projectId = '02a231b2406ed316c861abefc95c5e59'

// Configure a basic chain provider with default handling
const { publicClient } = configureChains([], [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!chain) return null // Handle undefined chain
      return { http: `https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID` } // Default for testing
    },
  }),
])

// Configure Wagmi with required properties
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: [] }), // Wallet handles the connected chain
  publicClient, // Required property for PublicClient
})

// Initialize EthereumClient
const ethereumClient = new EthereumClient(wagmiConfig, [])

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
