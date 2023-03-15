import React from 'react'

function Note({note : {date , note, id ,isHighPriority}, toggle}) {
  return (
    <div className='px-2 py-1 w-[200px] bg-slate-500 h-[100px] text-white rounded-md'>
        <div className="note-data">{date}</div>
        <div className="note-note">{note}</div>
        <button className={ (isHighPriority===true?"bg-green-800 ":"bg-red-800 ") + "px-3 py-1 rounded-md "} onClick={() => toggle(id)}>
          {(isHighPriority===true)?
          "Remove from Priority":
          "Add to Priority "
          }
          </button>
    </div>
  )
}

export default Note
