import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NoteContext = createContext({
    notes: [],
    addTodo: () => { },
    deleteTodo: () => { }
});


export default function NoteContextProvider({ children }) {
    const [notes, setNotes] = useState([
        { id: "12c6ea933", title: "task 1", description: "do something in task 1" },
        { id: "12c6ejkl5", title: "task 2", description: "do something in task 2" },
    ])

    function addTodo(title, description) {
        setNotes(prevNotes => [{ id: uuidv4(), title: title, description: description }, ...prevNotes]);
    }

    function deleteTodo(id) {
        console.log(id);
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    console.log(notes);

    const contextValue = {
        notes: notes,
        addTodo: addTodo,
        deleteTodo: deleteTodo
    }

    return (
        <NoteContext.Provider value={contextValue}>
            {children}
        </NoteContext.Provider>
    );
}