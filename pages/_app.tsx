import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

// Define your chains
const chains = [mainnet, polygon, optimism, arbitrum]

// Use your project ID from Web3Modal
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '02a231b2406ed316c861abefc95c5e59'

// Configure chains and providers using Web3Modal's w3mProvider
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

// Create the Wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

// Initialize the Ethereum client for Web3Modal
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  )
}

export default MyApp
