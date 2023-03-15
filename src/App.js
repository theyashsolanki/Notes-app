import { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import NotesContainer from './components/NotesContainer'

function App() {
  const [notes, setNotes] = useState([]);
  const createNode = (newNode) =>{
    setNotes([...notes, newNode])
  }
  const toggleNote = (id) => {
    const newNotes= notes.slice();
    const index = newNotes.findIndex(note => note.id === id)
    const note = newNotes[index];
    const newNote = {
      ...note,
      isHighPriority: !(note.isHighPriority)
    }
    newNotes[index] = newNote
    setNotes(newNotes)
  }
  // console.log(notes);
  return (
    <div className="App bg-slate-800 min-h-[100vh]">
        <CreateNote createNode={createNode} />
        <NotesContainer notes= {notes} toggleNote ={toggleNote}/>
    </div>
  );
}

export default App;
