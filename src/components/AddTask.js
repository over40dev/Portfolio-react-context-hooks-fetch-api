import {useState} from 'react';

export default function AddTask({onAdd}) {

  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!text || !date) {
    if (!text) {
      alert("Please Add Task Information");
      return;
    }

    onAdd({
      text,
      date,
      time,
      reminder,
    });

    setText('');
    setDate('');
    setTime('');
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
        <label htmlFor="date">Day</label>
        <input 
          name="date" type="date"
          value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="time">Time</label>
        <input 
          name="time" type="time"
          value={time} onChange={(e) => setTime(e.target.value)} />
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
