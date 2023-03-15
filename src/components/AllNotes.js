import React from 'react'
import Note from './Note'


export default function AllNotes({ notes,  toggleNote }) {
  console.log(notes);
  return (
    <div >
      <h1 className='text-3xl font-bold text-white '>All Task</h1>
      <div className='flex flex-wrap gap-2'>
        {
          notes.map( (note) => 
            <Note key={note.id} note={note} toggle ={toggleNote}/>
          )
        }
      </div>
    </div>
  )
}


