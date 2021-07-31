import {FaTimes} from 'react-icons/fa';

export default function Task({task, onDelete}) {
  return (
    <div className="task">
      <h3 key={task.id} className="task">
        {task.name} 
         <FaTimes 
           style={{color: 'red', cursor:'pointer'}}
           onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.date} <span className="reminder">{task.reminder}</span></p>
      
    </div>
  )
}
