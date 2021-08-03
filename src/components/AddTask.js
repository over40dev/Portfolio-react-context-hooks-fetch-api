import {useState} from 'react';

export default function AddTask({onAdd}) {

  const [text, setText] = useState('');
  const [datetime, setDateTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !datetime) {
      alert("Please Add Task Information");
      return;
    }

    onAdd({
      text,
      datetime,
      reminder,
    });

    setText('');
    setDateTime('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="taskText">Task</label>
        <input 
          name="taskText" type="text" placeholder="Add Task" 
          value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="datetime">Day & Time</label>
        <input 
          name="datetime" type="datetime-local"
          value={datetime} onChange={(e) => setDateTime(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          name="reminder" type="checkbox" 
          value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}/>
      </div>
      
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}
