import './App.css'
import InputForm from './components/InputForm'
import NotesArea from './components/NotesArea'
import NoteContextProvider from './store/note-context'

function App() {


  return (
    <>
      <NoteContextProvider>
        <h1 className='text-white m-4 p-4 text-4xl font-medium text-center'>Project Take Notes</h1>
        <InputForm />
        <NotesArea />
      </NoteContextProvider>
    </>
  )
}

export default App