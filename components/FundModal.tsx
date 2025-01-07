import React, { useState } from 'react'
import { FiCopy } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { shortenAddress } from '../utils/helpers'

interface FundModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (amount: number) => void
  contractAddress: string
}

export default function FundModal({ isOpen, onClose, onSubmit, contractAddress }: FundModalProps) {
  const [amount, setAmount] = useState<number>(0)
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = () => {
    if (amount <= 0) {
      alert('Please enter a valid amount greater than 0.')
      return
    }

    onSubmit(amount)
    setAmount(0)
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-20 backdrop-blur-md"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
        >
          <motion.div
            className="p-6 bg-white border rounded-lg w-96"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <h2 className="mb-4 text-xl font-bold">Fund Contract</h2>
            <input
              id="amount"
              type="number"
              placeholder="Enter amount to fund (USDC)"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />

            <div className="flex justify-end mb-4 space-x-2">
              <button
                onClick={handleSubmit}
                className="w-full px-3 py-2 text-white duration-100 ease-linear bg-black border border-black rounded-full hover:bg-transparent hover:text-black"
              >
                Submit
              </button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="truncate">Contract: {shortenAddress(contractAddress)}</span>
              <button
                onClick={handleCopyAddress}
                className="flex items-center space-x-1 text-blue-500 hover:text-blue-700"
              >
                <FiCopy />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
