import React from 'react'
import Note from './Note'
import { store } from '../feature/store'

function IsHighPriorityNotes({ notes ,toggleNote }) {
    return (

        <div >
            <h1 className='text-3xl font-bold text-white '>Hight Priority Tasks</h1>
            <div className='flex flex-wrap gap-2'>
                {
                    notes.filter(note => note.isHighPriority === true).map(function (ele) {
                        return (<Note key={ele.id} note={ele} toggle={toggleNote} removepriority={true} />)
                    })
                }
            </div>
        </div>

    )
}

export default IsHighPriorityNotes
