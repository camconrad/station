import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import {
  getStationContract,
  createTaskOnContract,
  startTaskOnContract,
  completeTaskOnContract,
} from '../utils/contractUtils'
import Header from '../components/Header'
import Modal from '../components/Modal'

interface Task {
  id: string
  content: string
  assignee?: string
  reward?: ethers.BigNumber
  creator?: string
}

interface TasksState {
  todo: Task[]
  doing: Task[]
  done: Task[]
}

const initialTasks: TasksState = {
  todo: [],
  doing: [],
  done: [],
}

const chainIdToNetwork: Record<number, 'ARBITRUM' | 'SKALE'> = {
  42161: 'ARBITRUM',
  974399131: 'SKALE',
}

export default function Home() {
  const [tasks, setTasks] = useState<TasksState>(initialTasks)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [contract, setContract] = useState<ethers.Contract | null>(null)
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null)

  useEffect(() => {
    const checkWalletConnection = async () => {
      const { ethereum } = window as any
      if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          const address = accounts[0]
          const provider = new ethers.providers.Web3Provider(ethereum)
          const network = await provider.getNetwork()
          const networkName = chainIdToNetwork[network.chainId]
          if (networkName) {
            const signer = provider.getSigner()
            const stationContract = getStationContract(signer, networkName)
            if (stationContract) {
              setContract(stationContract)
              setIsWalletConnected(true)
              setConnectedAddress(address)
              await fetchTasks(stationContract, address)
            }
          }
        }
      }
    }
    checkWalletConnection()
  }, [])

  const fetchTasks = async (contract: ethers.Contract, userAddress: string) => {
    try {
      const totalTasks = await contract.taskCount()
      const fetchedTasks: TasksState = { todo: [], doing: [], done: [] }
      for (let i = 0; i < totalTasks; i++) {
        const task = await contract.tasks(i)
        const taskData: Task = {
          id: i.toString(),
          content: task.description,
          assignee: task.assignee,
          creator: task.creator,
          reward: task.reward,
        }
        if (
          task.assignee.toLowerCase() === userAddress.toLowerCase() ||
          task.creator.toLowerCase() === userAddress.toLowerCase()
        ) {
          if (task.status === 0) fetchedTasks.todo.push(taskData)
          else if (task.status === 1) fetchedTasks.doing.push(taskData)
          else if (task.status === 2) fetchedTasks.done.push(taskData)
        }
      }
      setTasks(fetchedTasks)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return
    const sourceColumn = tasks[source.droppableId as keyof TasksState]
    const destColumn = tasks[destination.droppableId as keyof TasksState]
    const [removed] = sourceColumn.splice(source.index, 1)
    destColumn.splice(destination.index, 0, removed)
    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    })
    if (destination.droppableId === 'doing' && contract) {
      setLoading(true)
      setStatusMessage('Starting the task...')
      try {
        await startTaskOnContract(contract, parseInt(removed.id, 10))
        setStatusMessage('Task moved to Doing!')
      } catch (error) {
        setStatusMessage('Failed to move task to Doing.')
      } finally {
        setLoading(false)
      }
    }
    if (destination.droppableId === 'done' && contract) {
      setLoading(true)
      setStatusMessage('Completing the task...')
      try {
        if (removed.assignee?.toLowerCase() === connectedAddress?.toLowerCase()) {
          const provider = contract.provider as ethers.providers.Web3Provider
          const network = await provider.getNetwork()
          const networkName = chainIdToNetwork[network.chainId]
          if (!networkName) {
            throw new Error(`Unsupported chainId: ${network.chainId}`)
          }
          await completeTaskOnContract(contract, parseInt(removed.id, 10), networkName)
          setStatusMessage('Task marked as complete!')
        } else {
          setStatusMessage('Only the assignee can complete the task.')
        }
      } catch (error) {
        setStatusMessage('Failed to complete the task.')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleSaveTask = async (task: { taskContent: string; assignee: string; reward: number }) => {
    if (!contract) {
      setStatusMessage('Please connect your wallet to create a task.')
      return
    }
    const { taskContent, assignee, reward } = task
    const rewardInSmallestUnit = ethers.BigNumber.from(reward.toString())
    setLoading(true)
    setStatusMessage('Creating task...')
    try {
      await createTaskOnContract(contract, taskContent, assignee, rewardInSmallestUnit)
      setStatusMessage('Task created successfully!')
      await fetchTasks(contract, connectedAddress || '')
    } catch (error) {
      setStatusMessage('Failed to create task.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header
        isWalletConnected={isWalletConnected}
        connectedAddress={connectedAddress}
        onWalletConnect={(address, network) => {
          setConnectedAddress(address)
          setIsWalletConnected(!!address)
        }}
      />
      <div className="relative mt-16 container pt-4 pb-4 mx-auto max-w-[800px] px-3 md:px-0">
        {loading && statusMessage && <div className="mb-4 text-center text-blue-500">{statusMessage}</div>}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {['To Do', 'Doing', 'Done'].map((columnTitle, index) => {
              const columnId = ['todo', 'doing', 'done'][index] as keyof TasksState
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
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        {columnId === 'todo' && (
                          <button
                            className={`w-full p-2 mt-2 text-white bg-black border border-black rounded-lg hover:bg-black/0 duration-100 ease-linear transition-ease hover:text-black ${
                              !isWalletConnected ? 'cursor-not-allowed' : ''
                            }`}
                            onClick={() => setIsModalOpen(true)}
                            disabled={!isWalletConnected}
                          >
                            + New Task
                          </button>
                        )}
                      </div>
                    )}
                  </Droppable>
                </div>
              )
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
  )
}
