import React from 'react'
import Note from './Note'


function IsHighPriorityNotes({ notes ,toggleNote}) {
    
    return (

        <div >
            <h1 className='text-3xl font-bold text-white '>High Priority Tasks</h1>
            <div className='flex flex-wrap gap-2'>
                {
                    notes.filter(note => note.isHighPriority === true).map(function (ele) {
                        return (<Note key={ele.id} note={ele} toggle={toggleNote}/>)
                    })
                }
            </div>
        </div>

    )
}

export default IsHighPriorityNotes
