import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import Task from "./Task"

function App() {
  const [tasksList, setTasksList] = useState([{
    id: 0,
    content: "Nueva tarea",
    done: false
  }])

  const [filterDone, setFilterDone] = useState(false)

  const handleAddTask = () => {
    const ids = tasksList.map(task => task.id);
    const maxId = Math.max(...ids);
    setTasksList(prevTasksList => [
      ...prevTasksList,
      { id: maxId + 1, content: "Nueva tarea", done: false }
    ]);
  };

  return (
    <>
      <h1 className="text-xl">To-Do App</h1>
      <button onClick={()=>{setFilterDone(!filterDone)}}>{!filterDone ? "Ocultar completadas" : "Mostrar completadas"}</button>
      <ul>
        {!filterDone ? tasksList.map((task, index) => (
          <Task task={task} setTasksList={setTasksList} index={index} key={task.id} />
        )) : tasksList.filter((task) => !task.done).map((task, index) => (
          <Task task={task} setTasksList={setTasksList} index={index} key={task.id} />
        ))}
      </ul>
      <button className="flex" onClick={handleAddTask}><Plus /> Añadir tarea</button>
    </>
  )
}

export default App
