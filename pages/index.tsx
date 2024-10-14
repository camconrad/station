import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { FiFileText } from 'react-icons/fi'

const initialTasks = {
  todo: [],
  doing: [],
  done: [],
}

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState({ todo: '', doing: '', done: '' })
  const [isAdding, setIsAdding] = useState({ todo: false, doing: false, done: false })

  const onDragEnd = (result) => {
    const { source, destination } = result

    // Dropped outside the list
    if (!destination) return

    const sourceColumn = tasks[source.droppableId]
    const destColumn = tasks[destination.droppableId]

    // Remove the task from the source column
    const [removed] = sourceColumn.splice(source.index, 1)

    // Add the task to the destination column
    destColumn.splice(destination.index, 0, removed)

    // Update the state with new task positions
    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    })
  }

  // Add a new task on pressing Enter or losing focus
  const handleAddTask = (column) => {
    if (!newTask[column]) return

    const newTaskId = `${Date.now()}`
    setTasks({
      ...tasks,
      [column]: [...tasks[column], { id: newTaskId, content: newTask[column] }],
    })
    setNewTask({ ...newTask, [column]: '' }) // Clear input
    setIsAdding({ ...isAdding, [column]: false }) // Hide input after adding
  }

  // Toggle the input visibility
  const handleNewTaskClick = (column) => {
    setIsAdding({ ...isAdding, [column]: true })
  }

  // Handle key press (Enter to confirm)
  const handleKeyPress = (e, column) => {
    if (e.key === 'Enter') {
      handleAddTask(column)
    }
  }

  // Delete a task
  const handleDeleteTask = (column, taskId) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter((task) => task.id !== taskId),
    })
  }

  return (
    <div className="container p-4 mx-auto max-w-[800px]">
      <h1 className="mb-4 text-2xl font-bold">Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-4">
          {['To Do', 'Doing', 'Done'].map((columnTitle, index) => {
            const columnId = ['todo', 'doing', 'done'][index] // Map the column title to the corresponding task data

            return (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="p-4 rounded-lg shadow min-h-[300px]"
                  >
                    <h2 className="mb-2 text-lg font-bold capitalize">{columnTitle}</h2>

                    {/* Task list */}
                    {tasks[columnId].map((task, taskIndex) => (
                      <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex items-center justify-between p-2 mb-2 bg-white rounded-lg shadow-lg"
                          >
                            <span>{task.content}</span>
                            <button
                              onClick={() => handleDeleteTask(columnId, task.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}

                    {/* Add new task form */}
                    {isAdding[columnId] ? (
                      <div className="flex items-center p-2 mb-2 bg-white border rounded shadow-sm">
                        <FiFileText className="mr-2 text-gray-500" size={24} />
                        <input
                          type="text"
                          placeholder="Type a name..."
                          className="w-full px-2 py-1 border-none outline-none"
                          value={newTask[columnId]}
                          onChange={(e) =>
                            setNewTask({ ...newTask, [columnId]: e.target.value })
                          }
                          onBlur={() => handleAddTask(columnId)} // Confirm on blur
                          onKeyPress={(e) => handleKeyPress(e, columnId)} // Confirm on Enter
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
            )
          })}
        </div>
      </DragDropContext>
    </div>
  )
}
