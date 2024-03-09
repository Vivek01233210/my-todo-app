import { NoteContext } from "../store/note-context"
import { useContext } from "react"

import NoteItem from "./NoteItem";

export default function NotesArea() {

    const { notes } = useContext(NoteContext);
    // console.log(notes)
    return (
        <>
            {notes.length > 0 && <div className="bg-gray-400 m-4 p-4 rounded-md">
                {notes.map(note => {
                    return (<NoteItem key={note.id} id={note.id} title={note.title} description={note.description} />)
                })}
            </div>}
        </>
    );
}
