import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const chains = [mainnet, polygon, optimism, arbitrum]
const projectId = '02a231b2406ed316c861abefc95c5e59'

const { publicClient } = configureChains(chains, [
  jsonRpcProvider({
    rpc: (chain) => {
      switch (chain.id) {
        case mainnet.id:
          return { http: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' } // Replace with a valid project ID
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

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

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
