import { ethers } from 'ethers'
import StationABI from './StationABI.json'

const STATION_ADDRESS = '0x46C4DC3785c8baD38DDBfB6fAB61fBe0833B5f9A'

// Get Station contract instance
export const getStationContract = (signerOrProvider: ethers.Signer | ethers.Provider) => {
  return new ethers.Contract(STATION_ADDRESS, StationABI, signerOrProvider)
}

// Connect to MetaMask wallet
export const connectWallet = async () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      return { provider, signer }
    } catch (error) {
      console.error('Error connecting wallet:', error)
      return null
    }
  } else {
    alert('Please install MetaMask to use this app.')
    return null
  }
}

// Create a new task on the contract
export const createTaskOnContract = async (
  signer: ethers.Signer, 
  description: string, 
  assignee: string, 
  reward: number
) => {
  const contract = getStationContract(signer)
  try {
    const tx = await contract.createTask(description, assignee, ethers.utils.parseUnits(reward.toString(), 6))
    await tx.wait()
    console.log('Task created on contract')
  } catch (error) {
    console.error('Error creating task:', error)
  }
}

// Start a task on the contract
export const startTaskOnContract = async (signer: ethers.Signer, taskId: number) => {
  const contract = getStationContract(signer)
  try {
    const tx = await contract.startTask(taskId)
    await tx.wait()
    console.log('Task started on contract')
  } catch (error) {
    console.error('Error starting task:', error)
  }
}

// Complete a task on the contract
export const completeTaskOnContract = async (signer: ethers.Signer, taskId: number) => {
  const contract = getStationContract(signer)
  try {
    const tx = await contract.completeTask(taskId)
    await tx.wait()
    console.log('Task completed on contract')
  } catch (error) {
    console.error('Error completing task:', error)
  }
}
