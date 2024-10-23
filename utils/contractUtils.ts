import { ethers } from 'ethers';
import StationABI from './StationABI.json';

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
];

const STATION_ADDRESS = '0x46C4DC3785c8baD38DDBfB6fAB61fBe0833B5f9A';
const USDC_ADDRESS = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831';

// Connect to wallet
export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('Wallet connected:', await signer.getAddress());
      return { provider, signer };
    } catch (error) {
      console.error('Wallet connection failed:', error);
      return null;
    }
  } else {
    console.error('MetaMask is not installed');
    return null;
  }
};

// Get Station contract instance
export const getStationContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
  if (!signerOrProvider) return null;
  return new ethers.Contract(STATION_ADDRESS, StationABI, signerOrProvider);
};

// Get USDC contract instance
export const getUSDCContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
  if (!signerOrProvider) return null;
  return new ethers.Contract(USDC_ADDRESS, ERC20_ABI, signerOrProvider);
};

// Create task on the contract
export const createTaskOnContract = async (contract: ethers.Contract, description: string, assignee: string, reward: number) => {
  try {
    const tx = await contract.createTask(description, assignee, ethers.utils.parseUnits(reward.toString(), 6));
    console.log('Transaction sent:', tx.hash);
    await tx.wait();
    console.log('Task created:', tx);
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Start task on the contract
export const startTaskOnContract = async (contract: ethers.Contract, taskId: number) => {
  try {
    const tx = await contract.startTask(taskId);
    console.log('Transaction sent:', tx.hash);
    await tx.wait();
    console.log('Task started:', tx);
  } catch (error) {
    console.error('Error starting task:', error);
    throw error;
  }
};

// Complete task on the contract
export const completeTaskOnContract = async (contract: ethers.Contract, taskId: number) => {
  try {
    // Fetch the task details
    const task = await contract.tasks(taskId);
    const rewardAmount = task.reward;

    console.log('Reward amount to transfer:', ethers.utils.formatUnits(rewardAmount, 6));

    // Check the USDC balance of the contract
    const contractBalance = await contract.USDC(); // Get the USDC address from your contract if needed
    const balance = await IERC20(contract.USDC()).balanceOf(contract.address);
    
    console.log('Contract USDC balance:', ethers.utils.formatUnits(balance, 6));

    // Ensure the contract has enough USDC to transfer
    if (balance.lt(rewardAmount)) {
      throw new Error('Insufficient USDC balance in contract to complete the task');
    }

    // Estimate gas for the transaction
    const gasEstimate = await contract.estimateGas.completeTask(taskId);
    
    // Execute the task completion
    const tx = await contract.completeTask(taskId, {
      gasLimit: gasEstimate.add(gasEstimate.div(10)), // Add a 10% buffer to the estimated gas limit
    });

    console.log('Transaction sent:', tx.hash);
    await tx.wait();
    console.log('Task completed:', tx);
  } catch (error) {
    console.error('Error completing task:', error);
    throw error;
  }
};
