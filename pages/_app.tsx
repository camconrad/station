import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'

// Define chains
const chains = [mainnet, polygon, optimism, arbitrum]
const projectId = '02a231b2406ed316c861abefc95c5e59'

// Configure chains with jsonRpcProvider, adding RPC URLs for all chains
const { publicClient } = configureChains(chains, [
  jsonRpcProvider({
    rpc: (chain) => {
      switch (chain.id) {
        case mainnet.id:
          return { http: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' }
        case polygon.id:
          return { http: 'https://polygon-rpc.com' }
        case optimism.id:
          return { http: 'https://mainnet.optimism.io' }
        case arbitrum.id:
          return { http: 'https://arb1.arbitrum.io/rpc' }
        default:
          return null
      }
    },
  }),
])

// Create Wagmi config
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
