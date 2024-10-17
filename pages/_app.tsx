import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createClient } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { Web3Modal } from '@web3modal/react'

// Define your chains
const chains = [mainnet, polygon, optimism, arbitrum]

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'your_project_id'

const { provider } = configureChains(chains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: `https://rpc.ankr.com/${chain.network}`,
    }),
  }),
])

// Create the Wagmi client
const client = createClient({
  autoConnect: true,
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
      <Web3Modal projectId={projectId} />
    </WagmiConfig>
  )
}

export default MyApp
