import { useState } from 'react'
import { PenLine, Check } from 'lucide-react'

const Task = ({ task, setTasksList, index }) => {
    const handleCheck = (e) => {
        setTasksList(prevTasksList => {
            const newTasksList = [...prevTasksList];
            newTasksList[index].done = e.target.checked;
            return newTasksList
        })
    }

    const handleContentChange = (e) => {
        setTasksList(prevTasksList => {
            const newTasksList = [...prevTasksList];
            newTasksList[index].content = e.target.value;
            return newTasksList
        })
    }
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li key={task.id} className="flex group">
            <input type="checkbox" id={task.id} checked={task.done} onChange={handleCheck} />
            {!isEditing ?
                <>
                    <p className={task.done ? "line-through" : ""}> {task.content}</p>
                    <button className="opacity-0 group-hover:opacity-100 transition-all" onClick={() => setIsEditing(true)}>
                        <PenLine />
                    </button>
                </>
                :
                <>
                    <input type="text" onChange={handleContentChange} value={task.content} onSubmit={() => setIsEditing(false)} onBlur={() => setIsEditing(false)} autoFocus />
                    <button onClick={() => setIsEditing(false)}>
                        <Check />
                    </button>
                </>
            }
        </li>
    )
}

export default Task