import React, { useState } from 'react'

function CreateNote({ createNode }) {
    const[note, setNote] = useState('')
    const[noteHead, setNoteHead] = useState('');
    let noteData = note.slice()  // this is full note data
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(note && noteHead) { // dont create task if textarea is empty
          const data ={
              note: note.length > 60 ? note.slice(0, 60) + "............." : note,
              noteHead:noteHead.length > 20 ? noteHead.slice(0, 20) + "............" : noteHead,
              id:Math.floor(Math.random() * 10000 + 1), ////
              date:new Date().toJSON().slice(0,10),
              isHighPriority:false
          }
          createNode(data);
          // empty textarea after submit
          setNote('')
          setNoteHead('')
        }
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='p-4'>
            <div className='from-container container mx-auto p-3 w-[80%] mx-auto flex flex-col'>
                <textarea className='rounded-md my-2' cols="80" value={noteHead}  onChange={en => setNoteHead(en.target.value)} placeholder='✍️ write your task name...'></textarea>
                <textarea className='rounded-md my-2' cols="80" rows="5" value={note}  onChange={e => setNote(e.target.value)} placeholder='✍️ write your task description...'></textarea>
                <button className='bg-red-600 w-[20%] max-w-[150px] px-3 py-1 my-2 mx-auto rounded-md text-white font-semibold hover:bg-red-500 transition' type='submit'>Add note</button>
            </div>
      </form>
    </div>
  )
}

export default CreateNote
