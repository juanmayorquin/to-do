import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Task from "./Task";

function App() {
  const [tasksList, setTasksList] = useState([]);

  const [filterDone, setFilterDone] = useState(false);

  const handleAddTask = () => {
    const ids = tasksList.map((task) => task.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    setTasksList((prevTasksList) => [
      ...prevTasksList,
      { id: maxId + 1, content: "Nueva tarea", done: false },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">To-Do App</h1>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setFilterDone(!filterDone)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all"
          >
            {!filterDone ? "Ocultar completadas" : "Mostrar completadas"}
          </button>
          <button
            onClick={handleAddTask}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all"
          >
            <Plus className="mr-2" /> Añadir tarea
          </button>
        </div>
        {tasksList.length > 0 ? <ul className="space-y-4">
          {!filterDone
            ? tasksList.map((task, index) => (
              <Task
                task={task}
                setTasksList={setTasksList}
                index={index}
                key={task.id}
              />
            ))
            : tasksList
              .filter((task) => !task.done)
              .map((task, index) => (
                <Task
                  task={task}
                  setTasksList={setTasksList}
                  index={index}
                  key={task.id}
                />
              ))}
        </ul>
        :
        <p className="text-center">Añade una tarea para comenzar</p>}
      </div>
    </div>
  );
}

export default App;
