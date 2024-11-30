import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig } from 'wagmi'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// Web3Modal project ID
const projectId = '02a231b2406ed316c861abefc95c5e59'

// Configure Wagmi with a dynamic provider
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains: [] }), // Empty chains; rely on wallet's connected chain
  publicClient: jsonRpcProvider({
    rpc: (chain) => {
      console.log('Detected chain ID:', chain.id); // Debug chain ID
      return null; // Wallet-provided RPC will be used
    },
  }),
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
