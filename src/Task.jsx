import { useState } from "react";
import { PenLine, Check, Trash2 as Trash } from "lucide-react";

const Task = ({ task, setTasksList, index }) => {
  const handleCheck = (e) => {
    setTasksList((prevTasksList) => {
      const newTasksList = [...prevTasksList];
      newTasksList[index].done = e.target.checked;
      return newTasksList;
    });
  };

  const handleContentChange = (e) => {
    setTasksList((prevTasksList) => {
      const newTasksList = [...prevTasksList];
      newTasksList[index].content = e.target.value;
      return newTasksList;
    });
  };

  const handleDeleteTask = ()=>{
    setTasksList((prevTasksList)=>{
        return (prevTasksList.filter((taskFromList)=>(taskFromList.id !== task.id)))
    })
  }
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li
      key={task.id}
      className="flex items-center justify-between gap-4 p-3 rounded-lg shadow-md bg-white group hover:shadow-lg transition-all"
    >
      <input
        type="checkbox"
        id={task.id}
        checked={task.done}
        onChange={handleCheck}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
      />
      {!isEditing ? (
        <>
          <p
            className={`flex-grow ${
              task.done ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {task.content}
          </p>
          <button
            className="opacity-0 group-hover:opacity-100 transition-all text-gray-500 hover:text-gray-700"
            onClick={() => setIsEditing(true)}
          >
            <PenLine />
          </button>
          <button
            className="opacity-0 group-hover:opacity-100 transition-all text-gray-500 hover:text-red-800"
            onClick={handleDeleteTask}
          >
            <Trash />
          </button>
        </>
          
      ) : (
        <>
          <input
            type="text"
            onChange={handleContentChange}
            value={task.content}
            onBlur={() => setIsEditing(false)}
            autoFocus
            className="flex-grow px-4 py-2  border border-gray-300  h-min focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-all"
          />
          <button
            onClick={() => setIsEditing(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Check />
          </button>
        </>
      )}
    </li>
  );
};

export default Task;
