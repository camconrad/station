import { useState } from 'react'
import { useDisconnect } from 'wagmi'
import { ethers } from 'ethers'
import { connectWallet, getStationContract } from '../utils/contractUtils'
import Popover from '../components/common/Popover'
import FundModal from '../components/FundModal'
import { shortenAddress } from '../utils/helpers'
import { FiLogOut } from 'react-icons/fi'

interface HeaderProps {
  onConnect: () => Promise<void>
  isWalletConnected: boolean
  connectedAddress: string | null
}

const Header = ({ onConnect, isWalletConnected, connectedAddress }: HeaderProps) => {
  const { disconnect } = useDisconnect()

  const [isFundModalOpen, setIsFundModalOpen] = useState(false)
  const [contractBalance, setContractBalance] = useState<number>(0)
  const [currentNetwork, setCurrentNetwork] = useState<'ARBITRUM' | 'SKALE' | null>(null)
  const [contractAddress, setContractAddress] = useState<string>('')

  const handleDisconnect = () => {
    disconnect()
  }

  const fetchContractDetails = async () => {
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

        setContractAddress(contract.address)

        const rawBalance = await contract.getBalance()
        const balance = ethers.utils.formatUnits(rawBalance, 6)
        setContractBalance(parseFloat(balance))
      }
    } catch (error) {
      console.error('Error fetching contract details:', error)
    }
  }

  const handleFundSubmit = async (amount: number) => {
    try {
      console.log(`Funding ${contractAddress} with ${amount} USDC`)
      fetchContractDetails()
    } catch (error) {
      console.error('Error during funding:', error)
    }
  }

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
                {contractBalance.toFixed(2)} USDC
              </div>
            </div>
          </button>
          <div className="flex items-center space-x-4 text-[14px]">
            {isWalletConnected && connectedAddress ? (
              <Popover
                placement="bottom-right"
                content={
                  <div
                    className="flex items-center gap-2 text-red-500 cursor-pointer hover:text-red-600"
                    onClick={handleDisconnect}
                  >
                    Disconnect <FiLogOut />
                  </div>
                }
              >
                <div className="flex items-center px-4 py-2 text-white transition-all bg-black border border-black rounded-full cursor-pointer hover:bg-gray-800 hover:shadow-lg">
                  <span className="truncate max-w-[120px]">{shortenAddress(connectedAddress)}</span>
                </div>
              </Popover>
            ) : (
              <button
                className="text-white duration-200 ease-linear bg-black border border-black rounded-full hover:bg-transparent hover:text-black px-4 py-[6px]"
                onClick={async () => {
                  await fetchContractDetails()
                  onConnect()
                }}
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
