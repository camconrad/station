export default function Home() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Board</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-4">To Do</div>
          <div className="bg-gray-200 p-4">Doing</div>
          <div className="bg-gray-200 p-4">Done</div>
        </div>
      </div>
    )
  }
  