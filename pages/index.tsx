import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import Header from '../components/Header'

interface Task {
  id: string
  content: string
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
  const [newTask, setNewTask] = useState({ todo: '', doing: '', done: '' })
  const [isAdding, setIsAdding] = useState({ todo: false, doing: false, done: false })

  const onDragEnd = (result: DropResult) => {
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
  }

  const handleAddTask = (column: keyof TasksState) => {
    if (!newTask[column]) return

    const newTaskId = `${Date.now()}`
    setTasks({
      ...tasks,
      [column]: [...tasks[column], { id: newTaskId, content: newTask[column] }],
    })
    setNewTask({ ...newTask, [column]: '' })
    setIsAdding({ ...isAdding, [column]: false })
  }

  const handleNewTaskClick = (column: keyof TasksState) => {
    setIsAdding({ ...isAdding, [column]: true })
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, column: keyof TasksState) => {
    if (e.key === 'Enter') {
      handleAddTask(column)
    }
  }

  const handleDeleteTask = (column: keyof TasksState, taskId: string) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter((task) => task.id !== taskId),
    })
  }

  return (
    <>
      <Header />

      <div className="container p-4 mx-auto max-w-[800px]">
        <h1 className="mb-4 text-2xl font-bold">Board</h1>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-4">
            {['To Do', 'Doing', 'Done'].map((columnTitle, index) => {
              const columnId = ['todo', 'doing', 'done'][index] as keyof TasksState

              return (
                <div key={columnId}>
                  <h2 className="mb-2 text-lg font-bold capitalize">{columnTitle}</h2>

                  <Droppable droppableId={columnId}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="p-4 rounded-lg shadow min-h-[300px]"
                      >
                        {tasks[columnId].map((task, taskIndex) => (
                          <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="group flex items-center justify-between p-2 mb-2 bg-white rounded-lg shadow-lg border border-[#efefef]"
                              >
                                <span>{task.content}</span>
                                <button
                                  onClick={() => handleDeleteTask(columnId, task.id)}
                                  className="text-red-500 transition-opacity opacity-0 hover:text-red-700 group-hover:opacity-100"
                                >
                                  ✕
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}

                        {provided.placeholder}

                        {isAdding[columnId] ? (
                          <div className="flex items-center p-2 mb-2 bg-white rounded-lg shadow-lg border border-[#efefef]">
                            <FiFileText className="mr-2 text-gray-500" size={24} />
                            <input
                              type="text"
                              placeholder="Type a name..."
                              className="w-full px-2 py-1 border-none outline-none"
                              value={newTask[columnId]}
                              onChange={(e) => setNewTask({ ...newTask, [columnId]: e.target.value })}
                              onBlur={() => handleAddTask(columnId)}
                              onKeyPress={(e) => handleKeyPress(e, columnId)}
                            />
                          </div>
                        ) : (
                          <button
                            className="flex items-center mt-4 text-[#959595] w-full p-2 hover:bg-gray-50 rounded-lg"
                            onClick={() => handleNewTaskClick(columnId)}
                          >
                            <span className="mr-2">+ New</span>
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
    </>
  )
}
