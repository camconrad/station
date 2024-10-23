import React, { useState } from 'react';
import { ethers } from 'ethers';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: { taskContent: string; assignee: string; reward: number }) => void;
}

export default function Modal({ isOpen, onClose, onSave }: ModalProps) {
  const [taskContent, setTaskContent] = useState('');
  const [assignee, setAssignee] = useState('');
  const [reward, setReward] = useState<number>(0);

  const handleSave = () => {
    // Validate inputs
    if (!taskContent || !assignee || reward <= 0) {
      alert('Please fill in all fields and ensure the reward is greater than 0.');
      return;
    }

    // Check if assignee is a valid Ethereum address
    if (!ethers.utils.isAddress(assignee)) {
      alert('Please enter a valid Ethereum address for the assignee.');
      return;
    }

    // Convert reward to the smallest unit (6 decimals)
    const rewardInSmallestUnit = ethers.utils.parseUnits(reward.toString(), 6); // Convert to 6 decimals

    onSave({ taskContent, assignee, reward: rewardInSmallestUnit });
    setTaskContent('');
    setAssignee('');
    setReward(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-20 backdrop-blur-lg">
      <div className="p-6 bg-white rounded-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Add New Task</h2>
        <input
          id="taskContent"
          type="text"
          placeholder="Task Content"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-black"
        />
        <input
          id="assignee"
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-black"
        />
        <input
          id="reward"
          type="number"
          placeholder="Reward (USDC)"
          value={reward}
          onChange={(e) => setReward(Number(e.target.value))}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="px-3 py-1 text-white duration-100 ease-linear bg-black border border-black rounded-full hover:bg-transparent hover:text-black"
          >
            Save Task
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 text-white duration-100 ease-linear bg-gray-400 rounded-full hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
