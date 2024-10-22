import { ethers, Provider, Abi } from 'ethers'
import StationABI from './StationABI.json'

const STATION_ADDRESS = '0xYourContractAddress'

// Function to get the Station contract instance
export const getStationContract = (signerOrProvider: ethers.Signer | Provider) => {
  return new ethers.Contract(STATION_ADDRESS, StationABI as Abi, signerOrProvider)
}

// Function to connect to MetaMask wallet
export const connectWallet = async () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum) // Use BrowserProvider for web context
      await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()

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
