import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

// Define the chains
const chains = [mainnet, polygon, optimism, arbitrum]
const projectId = '02a231b2406ed316c861abefc95c5e59'

// Configure chains and use custom Arbitrum RPC
const { publicClient } = configureChains(chains, [
  w3mProvider({ projectId }),
  {
    rpc: (chain) => {
      if (chain.id === arbitrum.id) {
        return { http: 'https://arb1.arbitrum.io/rpc' }
      }
      return null
    },
  },
])

// Create Wagmi configuration
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

// Create EthereumClient for Web3Modal
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default MyApp
