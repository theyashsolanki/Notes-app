import React from 'react'

function Note({note : {date , Tasknote, noteHead, note, id ,isHighPriority}, toggle}) {
  return (
    // height 100% and break-words added
    <div className='px-2 py-2 relative w-[350px] break-words bg-slate-500 h-full text-white rounded-md'>
        <div className="note-date absolute right-0">{date}</div>
        <div className='font-bold'>{noteHead}</div>
        <div className="note-note">{note}</div>
        
        <button className={ (isHighPriority===true?"bg-red-800 ": "bg-green-800 ") + "px-3 py-1 rounded-md "} onClick={() => toggle(id)}>
          {(isHighPriority===true)?
          "Remove from Priority":
          "Add to Priority "
          }
        </button>
        
      

    </div>
  )
}

export default Note
