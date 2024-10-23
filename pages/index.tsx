import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { connectWallet, getStationContract, createTaskOnContract, completeTaskOnContract } from '../utils/contractUtils'
import Header from '../components/Header'
import Modal from '../components/Modal'

interface Task {
  id: string
  content: string
  assignee?: string
  reward?: number
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

export default function Home() {
  const [tasks, setTasks] = useState<TasksState>(initialTasks)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [contract, setContract] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [statusMessage, setStatusMessage] = useState<string>('')

  useEffect(() => {
    const initWallet = async () => {
      const wallet = await connectWallet()
      if (wallet?.signer) {
        const stationContract = getStationContract(wallet.signer)
        setContract(stationContract)
        console.log('Contract connected:', stationContract)
      } else {
        console.error('Failed to connect wallet.')
      }
    }
    initWallet()
  }, [])

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    console.log(`Moving task from ${source.droppableId} to ${destination.droppableId}`)

    const sourceColumn = tasks[source.droppableId as keyof TasksState]
    const destColumn = tasks[destination.droppableId as keyof TasksState]
    const [removed] = sourceColumn.splice(source.index, 1)
    destColumn.splice(destination.index, 0, removed)

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    })

    if (destination.droppableId === 'done' && contract) {
      setLoading(true)
      setStatusMessage('Signing transaction to complete the task...')
      try {
        const taskId = parseInt(removed.id, 10)
        console.log(`Attempting to complete task ID: ${taskId}`)
        await completeTaskOnContract(contract, taskId)
        setStatusMessage('Task marked as complete! USDC payout triggered.')
      } catch (error) {
        console.error('Error completing task:', error)
        setStatusMessage('Failed to complete the task. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleSaveTask = async (task: { taskContent: string, assignee: string, reward: number }) => {
    const { taskContent, assignee, reward } = task
    const newTaskId = `${Date.now()}`
    const newTask: Task = { id: newTaskId, content: taskContent, assignee, reward }

    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask],
    })

    if (contract) {
      setLoading(true)
      setStatusMessage('Signing transaction to create a new task...')
      try {
        console.log('Creating task on contract:', task)
        await createTaskOnContract(contract, taskContent, assignee, reward)
        setStatusMessage('Task created successfully!')
      } catch (error) {
        console.error('Error creating task:', error)
        setStatusMessage('Failed to create task. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleDeleteTask = (columnId: keyof TasksState, taskId: string) => {
    setTasks({
      ...tasks,
      [columnId]: tasks[columnId].filter((task) => task.id !== taskId),
    })
  }

  return (
    <>
      <Header />

      <div className="relative mt-16 container pt-4 pb-4 mx-auto max-w-[800px]">
        {loading && <div className="mb-4 text-center text-blue-500">{statusMessage}</div>}

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-4">
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
                                <button
                                  onClick={() => handleDeleteTask(columnId, task.id)}
                                  className="text-red-500 transition-opacity duration-100 ease-linear opacity-0 hover:opacity-100 group-hover:opacity-100"
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
                            className="w-full p-2 mt-4 text-white duration-100 ease-linear bg-black border border-black rounded-lg hover:bg-transparent hover:text-black"
                            onClick={() => setIsModalOpen(true)}
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
