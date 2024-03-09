import { NoteContext } from "../store/note-context"
import { useContext, useState } from "react"

export default function NoteItem({ id, title, description }) {
  const [completed, setCompleted] = useState(false);

  const { deleteTodo } = useContext(NoteContext);

  return (
    <div className="w-full my-4 bg-[#F9E8C9] rounded-sm flex justify-between">
      <div>
        <h2 className={`text-4xl text-orange-500 px-3 pt-2 ${completed ? "line-through" : ""}`}
        >{title}</h2>
        <p
          className={`text-xl px-3 py-2 text-orange-300 ${completed ? 'line-through' : ''}`}
        >{description}</p>
      </div>
      <div className="flex items-center">
        <button
          className="text-white bg-[#FBA834] m-4 py-2 px-4 rounded-3xl hover:text-yellow-200 active:text-white"
          onClick={() => { deleteTodo(id) }}
        >Delete
        </button>
        <button
          className="text-white bg-[#FBA834] m-4 py-2 px-4 rounded-3xl hover:text-yellow-200 active:text-white"
          onClick={() => { setCompleted(prevValue => !prevValue) }}
        >Completed
        </button>
      </div>
    </div>
  )
}
