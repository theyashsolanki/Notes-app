import React, { useState } from 'react'

function CreateNote({ createNode }) {
    const[note, setNote] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data ={
            note:note,
            id:Math.floor(Math.random() * 10000),
            date:new Date().toJSON().slice(0,10),
            isHighPriority:false
        }
        createNode(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='p-4'>
            <div className='from-container container mx-auto p-3 w-[80%] mx-auto flex flex-col'>
                <textarea className='rounded-md' cols="80" value={note} onChange={e => setNote(e.target.value)} placeholder='✍️ write your note...'></textarea>
                <button className='bg-red-600 w-[20%] max-w-[150px] px-3 py-1 my-2 mx-auto rounded-md text-white font-semibold hover:bg-red-500 transition' type='submit'>Add note</button>
            </div>
      </form>
    </div>
  )
}

export default CreateNote
