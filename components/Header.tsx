import { useState } from 'react'
import { useDisconnect } from 'wagmi'
import { ethers } from 'ethers'
import { connectWallet, getStationContract } from '../utils/contractUtils'
import FundModal from '../components/FundModal'
import { shortenAddress } from '../utils/helpers'

const CONTRACT_ADDRESSES = {
  ARBITRUM: '0x48DD7500887801bec355ba2cf6aA028E67a41638',
  SKALE: '0xf350c26f76cdbcef6c9a145040f31bfaa7074171',
}

interface HeaderProps {
  isWalletConnected: boolean
  connectedAddress: string | null
  onWalletConnect: (address: string | null, network: 'ARBITRUM' | 'SKALE' | null) => void
}

const Header = ({ isWalletConnected, connectedAddress, onWalletConnect }: HeaderProps) => {
  const { disconnect } = useDisconnect()

  const [isFundModalOpen, setIsFundModalOpen] = useState(false)
  const [contractBalance, setContractBalance] = useState<number>(0)
  const [currentNetwork, setCurrentNetwork] = useState<'ARBITRUM' | 'SKALE' | null>(null)

  const handleDisconnect = () => {
    disconnect()
    onWalletConnect(null, null)
  }

  const handleConnectWallet = async () => {
    try {
      const wallet = await connectWallet()
      if (wallet?.signer) {
        const provider = wallet.signer.provider as ethers.providers.Web3Provider
        const network = await provider.getNetwork()
        const networkName = network.chainId === 42161 ? 'ARBITRUM' : 'SKALE'

        setCurrentNetwork(networkName)

        const contract = getStationContract(wallet.signer, networkName)
        if (!contract) {
          console.error('Failed to get contract instance')
          return
        }

        const rawBalance = await contract.getBalance()
        console.log('Raw contract balance:', rawBalance.toString()) // Debugging
        const balance = ethers.utils.formatUnits(rawBalance, 6)
        console.log('Formatted contract balance:', balance) // Debugging
        setContractBalance(parseFloat(balance))

        const address = await wallet.signer.getAddress()
        onWalletConnect(address, networkName)
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  const handleFundSubmit = async (amount: number) => {
    try {
      console.log(`Funding ${CONTRACT_ADDRESSES[currentNetwork || 'ARBITRUM']} with ${amount} USDC`)
      await handleConnectWallet()
    } catch (error) {
      console.error('Error during funding:', error)
    }
  }

  const contractAddress = CONTRACT_ADDRESSES[currentNetwork || 'ARBITRUM']

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white dark:bg-black mx-auto max-w-[800px]">
      <div className="container flex items-center justify-between px-3 pt-4 pb-4 mx-auto md:px-0">
        <div className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/671597a7dd56e19ff494a076/67159857e034eba568b415ae_station.png"
            alt="Station"
            className="h-6"
          />
          <h2 className="ml-2 text-xl font-bold">Station</h2>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsFundModalOpen(true)}
            className="mr-3 text-right cursor-pointer"
          >
            <div>
              <div className="text-[14px] text-[#959595]">Balance</div>
              <div className="font-regular mt-[-2px] text-[14px] text-[#030303]">
                {Number.isFinite(contractBalance) ? contractBalance.toFixed(2) : 'Loading...'} USDC
              </div>
            </div>
          </button>

          <div className="flex items-center space-x-4 text-[14px]">
            {isWalletConnected && connectedAddress ? (
              <div
                className="text-black cursor-pointer duration-200 ease-linear bg-transparent border border-black rounded-full px-4 py-[6px]"
                onClick={handleDisconnect}
              >
                <span className="truncate max-w-[120px]">{shortenAddress(connectedAddress)}</span>
              </div>
            ) : (
              <button
                className="text-white cursor-pointer duration-200 ease-linear bg-black border border-black rounded-full hover:bg-black/0 hover:text-black px-4 py-[6px]"
                onClick={handleConnectWallet}
              >
                Connect
              </button>
            )}
          </div>
        </div>
      </div>
      <FundModal
        isOpen={isFundModalOpen}
        onClose={() => setIsFundModalOpen(false)}
        onSubmit={handleFundSubmit}
        contractAddress={contractAddress}
      />
    </header>
  )
}

export default Header
