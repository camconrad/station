import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { connectWallet, getStationContract, createTaskOnContract, startTaskOnContract, completeTaskOnContract } from '../utils/contractUtils';
import Header from '../components/Header';
import Modal from '../components/Modal';

interface Task {
  id: string;
  content: string;
  assignee?: string;
  reward?: ethers.BigNumber; // Keep as BigNumber
  creator?: string; // Track the creator of the task
}

interface TasksState {
  todo: Task[];
  doing: Task[];
  done: Task[];
}

const initialTasks: TasksState = {
  todo: [],
  doing: [],
  done: [],
};

export default function Home() {
  const [tasks, setTasks] = useState<TasksState>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const [adminAddress, setAdminAddress] = useState<string | null>(null);

  const connectUserWallet = async () => {
    const wallet = await connectWallet();
    if (wallet?.signer) {
      const stationContract = getStationContract(wallet.signer);
      if (stationContract) {
        setContract(stationContract);
        setIsWalletConnected(true);

        const address = await wallet.signer.getAddress();
        setConnectedAddress(address);

        // Fetch and set admin address from the contract
        const ownerAddress = await stationContract.owner();
        setAdminAddress(ownerAddress);

        await fetchTasks(stationContract, address);
      }
    } else {
      setIsWalletConnected(false);
      setConnectedAddress(null);
      console.error('Failed to connect wallet.');
    }
  };

  useEffect(() => {
    const checkInitialConnection = async () => {
      const wallet = await connectWallet();
      if (wallet?.signer) {
        const stationContract = getStationContract(wallet.signer);
        if (stationContract) {
          setContract(stationContract);
          setIsWalletConnected(true);

          const address = await wallet.signer.getAddress();
          setConnectedAddress(address);

          // Fetch and set admin address from the contract
          const ownerAddress = await stationContract.owner();
          setAdminAddress(ownerAddress);

          await fetchTasks(stationContract, address);
        }
      }
    };
    checkInitialConnection();
  }, []);

  const fetchTasks = async (contract: ethers.Contract, userAddress: string) => {
    try {
      const totalTasks = await contract.taskCount();
      const fetchedTasks: TasksState = { todo: [], doing: [], done: [] };

      for (let i = 0; i < totalTasks; i++) {
        const task = await contract.tasks(i);
        const taskData: Task = {
          id: i.toString(),
          content: task.description,
          assignee: task.assignee,
          creator: task.creator, // Add creator to task data
          reward: task.reward, // Keep as BigNumber
        };

        // Allow the assignee and the creator of the task to see it
        if (task.assignee.toLowerCase() === userAddress.toLowerCase() || task.creator.toLowerCase() === userAddress.toLowerCase()) {
          if (task.status === 0) fetchedTasks.todo.push(taskData);
          else if (task.status === 1) fetchedTasks.doing.push(taskData);
          else if (task.status === 2) fetchedTasks.done.push(taskData);
        }
      }

      setTasks(fetchedTasks);
      console.log('Tasks fetched:', fetchedTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasks[source.droppableId as keyof TasksState];
    const destColumn = tasks[destination.droppableId as keyof TasksState];
    const [removed] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });

    if (destination.droppableId === 'doing' && contract) {
      setLoading(true);
      setStatusMessage('Starting the task...');
      try {
        await startTaskOnContract(contract, parseInt(removed.id, 10));
        setStatusMessage('Task moved to Doing!');
      } catch (error) {
        setStatusMessage('Failed to move task to Doing.');
        console.error('Error starting task:', error);
      } finally {
        setLoading(false);
      }
    }

    if (destination.droppableId === 'done' && contract) {
      setLoading(true);
      setStatusMessage('Completing the task...');
      try {
        // Check if the connected address is the assignee
        if (removed.assignee?.toLowerCase() === connectedAddress?.toLowerCase()) {
          console.log('Attempting to complete task with ID:', removed.id); // Debugging line
          const task = await contract.tasks(parseInt(removed.id, 10));
          console.log('Current task status:', task.status.toString()); // Log current status
          await completeTaskOnContract(contract, parseInt(removed.id, 10));
          setStatusMessage('Task marked as complete!');
        } else {
          setStatusMessage('Only the assignee can complete the task.');
        }
      } catch (error) {
        setStatusMessage('Failed to complete the task.');
        console.error('Error completing task:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDeleteTask = (columnId: keyof TasksState, taskId: string) => {
    setTasks({
      ...tasks,
      [columnId]: tasks[columnId].filter((task) => task.id !== taskId),
    });
  };

  const handleSaveTask = async (task: { taskContent: string; assignee: string; reward: number }) => { // Keep reward as number for Modal
    if (!contract) {
      setStatusMessage('Please connect your wallet to create a task.');
      return;
    }

    const { taskContent, assignee, reward } = task;
    const rewardInSmallestUnit = ethers.BigNumber.from(reward.toString()); // Pass as is, no conversion
    setLoading(true);
    setStatusMessage('Creating task...');

    try {
      await createTaskOnContract(contract, taskContent, assignee, rewardInSmallestUnit); // Pass directly as BigNumber
      setStatusMessage('Task created successfully!');
      await fetchTasks(contract, connectedAddress || ''); // Fetch tasks based on connected address
    } catch (error) {
      setStatusMessage('Failed to create task.');
      console.error('Error creating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = !isWalletConnected || loading;

  return (
    <>
      <Header 
        onConnect={connectUserWallet} 
        isWalletConnected={isWalletConnected} 
        connectedAddress={connectedAddress} 
      />
      <div className="relative mt-16 container pt-4 pb-4 mx-auto max-w-[800px] px-3 md:px-0">
        {loading && <div className="mb-4 text-center text-blue-500">{statusMessage}</div>}

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {['To Do', 'Doing', 'Done'].map((columnTitle, index) => {
              const columnId = ['todo', 'doing', 'done'][index] as keyof TasksState;

              return (
                <div key={columnId}>
                  <h2 className="mb-2 text-lg font-bold capitalize">{columnTitle}</h2>

                  <Droppable droppableId={columnId}>
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef} className="h-auto">
                        {tasks[columnId].map((task, taskIndex) => (
                          <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="group flex items-center justify-between pt-2 pb-2 pl-3 pr-3 mb-2 bg-white rounded-lg shadow-lg border border-[#efefef]"
                              >
                                <span>{task.content}</span>
                                <button
                                  onClick={() => handleDeleteTask(columnId, task.id)}
                                  className="text-red-500 transition-opacity opacity-0 hover:opacity-100 group-hover:opacity-100"
                                >
                                  ✕
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}

                        {columnId === 'todo' && (
                          <button
                            className={`w-full p-2 mt-4 text-white duration-100 ease-linear bg-black border border-black rounded-lg hover:bg-transparent hover:text-black ${isButtonDisabled ? 'cursor-not-allowed' : ''}`}
                            onClick={() => setIsModalOpen(true)}
                            disabled={isButtonDisabled}
                          >
                            + New Task
                          </button>
                        )}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      />
    </>
  );
}
