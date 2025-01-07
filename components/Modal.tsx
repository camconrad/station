import React, { useState } from 'react'
import { ethers } from 'ethers'
import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (task: { taskContent: string; assignee: string; reward: number }) => void
}

export default function Modal({ isOpen, onClose, onSave }: ModalProps) {
  const [taskContent, setTaskContent] = useState('')
  const [assignee, setAssignee] = useState('')
  const [reward, setReward] = useState<number>(0)

  const handleSave = () => {
    if (!taskContent || !assignee || reward <= 0) {
      alert('Please fill in all fields and ensure the reward is greater than 0.')
      return
    }

    if (!ethers.utils.isAddress(assignee)) {
      alert('Please enter a valid Ethereum address for the assignee.')
      return
    }

    onSave({ taskContent, assignee, reward })
    setTaskContent('')
    setAssignee('')
    setReward(0)
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
            <h2 className="mb-4 text-xl font-bold">Add New Task</h2>
            <input
              id="taskContent"
              type="text"
              placeholder="Task Content"
              value={taskContent}
              onChange={(e) => setTaskContent(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />
            <input
              id="assignee"
              type="text"
              placeholder="Assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />
            <input
              id="reward"
              type="number"
              placeholder="Reward (USDC)"
              value={reward}
              onChange={(e) => setReward(Number(e.target.value))}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />

            <div className="space-x-2">
              <button
                onClick={handleSave}
                className="w-full px-3 py-2 text-white duration-100 ease-linear bg-black border border-black rounded-full hover:bg-transparent hover:text-black"
              >
                Save Task
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
