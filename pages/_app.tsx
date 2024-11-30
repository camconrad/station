import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// Web3Modal project ID
const projectId = '02a231b2406ed316c861abefc95c5e59'

// Satisfy `configureChains`
const placeholderChain = {
  id: 1, // Mainnet ID
  name: 'Ethereum Mainnet',
  network: 'mainnet',
  rpcUrls: {
    default: {
      http: ['https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'], // Replace later
    },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
}

// Configure chains with a placeholder to avoid build errors
const { publicClient } = configureChains([placeholderChain], [
  jsonRpcProvider({
    rpc: (chain) => {
      if (!chain) return null
      return { http: `https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID` } // Replace later
    },
  }),
])

// Configure Wagmi
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: [placeholderChain] }), // Placeholder chain
  publicClient, // Required for proper operation
})

// Initialize EthereumClient
const ethereumClient = new EthereumClient(wagmiConfig, [placeholderChain])

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
