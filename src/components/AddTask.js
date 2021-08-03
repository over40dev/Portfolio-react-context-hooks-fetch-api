import {useState} from 'react';

export default function AddTask({onAdd}) {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!text || !date) {
    if (!name) {
      alert("Please Add Task Information");
      return;
    }

    onAdd({
      name,
      date,
      time,
      reminder,
    });

    setName('');
    setDate('');
    setTime('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="name">Task</label>
        <input 
          name="name" type="text" placeholder="Add Task" 
          value={name} onChange={(e) => setName(e.target.value)} />
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
