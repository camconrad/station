import { ethers, Provider } from 'ethers'
import StationABI from './StationABI.json'

const STATION_ADDRESS = '0xYourContractAddress'

export const getStationContract = (signerOrProvider: ethers.Signer | Provider) => {
  return new ethers.Contract(STATION_ADDRESS, StationABI, signerOrProvider)
}

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      return { provider, signer };
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return null;
    }
  } else {
    alert('Please install MetaMask to use this app.');
    return null;
  }
};
