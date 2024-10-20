import Link from 'next/link'
import { useState, useEffect, useMemo } from 'react'
import { useAccount, useDisconnect, useNetwork } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'
import Popover from '../components/common/Popover'
// import HoverIndicator from '../components/common/HoverIndicator'
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
    <header className="fixed inset-x-0 top-0 z-10 bg-white dark:bg-black mx-auto max-w-[800px]">
      <div className="container flex items-center justify-between pt-4 pb-4 mx-auto">
        <Link href="/" className="flex items-center">
          <img src="https://cdn.prod.website-files.com/671597a7dd56e19ff494a076/67159857e034eba568b415ae_station.png" alt="Station" className="h-6" />
          <h2 className="ml-2 text-xl font-bold">Station</h2>
        </Link>
        
        <div className="flex items-center space-x-4 text-[14px]">
          {address ? (
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
                {shortenAddress(address)}
              </div>
            </Popover>
          ) : (
            <button
              className="px-3 py-1 text-black border border-black rounded-full cursor-pointer"
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
