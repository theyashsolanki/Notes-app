import React from 'react'
import AllNotes from './AllNotes'
import IsHighPriorityNotes from './IsHighPriorityNotes'

function NotesContainer({ notes, toggleNote }) {
  return (
    <>
      <div className='container p-4 bg-[#1e293b] rounded-lg w-[80%] mx-auto'>
        <IsHighPriorityNotes notes={notes} toggleNote={toggleNote} />
      </div>
      <div className='container p-4 bg-[#1e293b] rounded-lg w-[80%] mx-auto'>
        <AllNotes  notes={notes} toggleNote={toggleNote} />
      </div>
    </>
  )
}

export default NotesContainer
