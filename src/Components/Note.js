import React from 'react'
import {MdDelete}from 'react-icons/md'

function Note({text,date,id,handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDelete onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
        </div>
        
    </div>
  )
}

export default Note