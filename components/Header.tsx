import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { useAccount, useDisconnect, useNetwork } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'
import Popover from '../components/common/Popover'
import HoverIndicator from '../components/common/HoverIndicator'
import { shortenAddress } from '../utils/helpers'
import { FiLogOut } from 'react-icons/fi'

export const Header = () => {
  const { address } = useAccount()
  const { chain, chains } = useNetwork()
  const { open } = useWeb3Modal()
  const { disconnect } = useDisconnect()

  const [isOpenConnectWalletModal, setOpenConnectWalletModal] = useState(false)

  const handleDisconnect = () => {
    disconnect()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white shadow dark:bg-black">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href="/" className="flex items-center">
          {/* Logo for Station */}
          <img src="/logo-placeholder.png" alt="Station" className="h-8" />
          <h2 className="ml-2 text-xl font-bold">Station</h2>
        </Link>
        
        <div className="flex items-center space-x-4">
          {address ? (
            <Popover
              placement="bottom-right"
              content={
                <HoverIndicator>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={handleDisconnect}
                  >
                    Disconnect <FiLogOut className="ml-2" />
                  </div>
                </HoverIndicator>
              }
            >
              <div className="px-4 py-2 text-purple-500 border border-purple-500 rounded-full cursor-pointer">
                {shortenAddress(address)}
              </div>
            </Popover>
          ) : (
            <button
              className="px-4 py-2 text-purple-500 border border-purple-500 rounded-full"
              onClick={() => open()}
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
