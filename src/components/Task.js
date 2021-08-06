import React from 'react';
import {FaTimes} from 'react-icons/fa';

export default function Task({task, onDelete, onToggle}) {

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 key={task.id}>
        {task.name} 
         <FaTimes 
           style={{color: 'red', cursor:'pointer'}}
           onClick={() => onDelete(task.id)}/>
      </h3>
      {task.date} {task.time ? ` - ${task.time}` : ''}
      {/* <p>{task.date.toDateString()} - {task.date.toLocaleTimeString()}</p> */}
      
    </div>
  )
}
