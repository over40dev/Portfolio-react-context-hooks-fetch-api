import {useState} from 'react';

export default function AddTask() {

  const [text, setText] = useState('');
  const [datetime, setDateTime] = useState(Date());
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="taskText">Task</label>
        <input 
          name="taskText" type="text" placeholder="Add Task" 
          value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="datetime">Day & Time</label>
        <input 
          name="datetime" type="datetime-local" placeholder="Add Date and Time" 
          value={datetime} onChange={(e) => setDateTime(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          name="reminder" type="checkbox" 
          value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      
      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}
