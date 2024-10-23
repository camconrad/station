import { ethers } from 'ethers'
import StationABI from './StationABI.json'

const STATION_ADDRESS = '0x46C4DC3785c8baD38DDBfB6fAB61fBe0833B5f9A'

// Connect to wallet
export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request wallet connection
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      console.log('Wallet connected:', await signer.getAddress())
      return { provider, signer }
    } catch (error) {
      console.error('Wallet connection failed:', error)
      return null
    }
  } else {
    console.error('MetaMask is not installed')
    return null
  }
}

// Get Station contract instance
export const getStationContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
  if (!signerOrProvider) {
    console.error('No signer or provider provided')
    return null
  }
  return new ethers.Contract(STATION_ADDRESS, StationABI, signerOrProvider)
}

// Create task on the contract
export const createTaskOnContract = async (
  contract: ethers.Contract,
  description: string,
  assignee: string,
  reward: number
) => {
  try {
    const tx = await contract.createTask(description, assignee, ethers.utils.parseUnits(reward.toString(), 6))
    console.log('Transaction sent, waiting for confirmation...', tx.hash)
    await tx.wait()
    console.log('Task created on contract:', tx)
  } catch (error) {
    console.error('Error creating task on contract:', error)
    throw error
  }
}

// Start task on the contract
export const startTaskOnContract = async (contract: ethers.Contract, taskId: number) => {
  try {
    const tx = await contract.startTask(taskId)
    console.log('Transaction sent, waiting for confirmation...', tx.hash)
    await tx.wait()
    console.log('Task started on contract:', tx)
  } catch (error) {
    console.error('Error starting task on contract:', error)
    throw error
  }
}

// Complete task on the contract
export const completeTaskOnContract = async (contract: ethers.Contract, taskId: number) => {
  try {
    const tx = await contract.completeTask(taskId)
    console.log('Transaction sent, waiting for confirmation...', tx.hash)
    await tx.wait()
    console.log('Task completed on contract:', tx)
  } catch (error) {
    console.error('Error completing task on contract:', error)
    throw error
  }
}
