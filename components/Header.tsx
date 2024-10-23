import Link from 'next/link'
import { useEffect } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'
import Popover from '../components/common/Popover'
import { shortenAddress } from '../utils/helpers'
import { FiLogOut } from 'react-icons/fi'

interface HeaderProps {
  onConnect: () => Promise<void>
  isWalletConnected: boolean
  connectedAddress: string | null
}

const Header = ({ onConnect, isWalletConnected, connectedAddress }: HeaderProps) => {
  const { disconnect } = useDisconnect()
  const { open } = useWeb3Modal()

  const handleDisconnect = () => {
    disconnect()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white dark:bg-black mx-auto max-w-[800px]">
      <div className="container flex items-center justify-between px-3 pt-4 pb-4 mx-auto md:px-0">
        <Link href="/" className="flex items-center">
          <img 
            src="https://cdn.prod.website-files.com/671597a7dd56e19ff494a076/67159857e034eba568b415ae_station.png" 
            alt="Station" 
            className="h-6" 
          />
          <h2 className="ml-2 text-xl font-bold">Station</h2>
        </Link>

        <div className="flex items-center space-x-4 text-[14px]">
          {isWalletConnected && connectedAddress ? (
            <Popover
              placement="bottom-right"
              content={
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleDisconnect}
                >
                  Disconnect <FiLogOut className="ml-2" />
                </div>
              }
            >
              <div className="px-3 py-1 text-black border border-black rounded-full cursor-pointer">
                {shortenAddress(connectedAddress)}
              </div>
            </Popover>
          ) : (
            <button
              className="px-3 py-1 text-black border border-black rounded-full cursor-pointer"
              onClick={onConnect}
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
