import {useState} from 'react';

export default function AddTask() {

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="taskText">Task</label>
        <input 
          name="taskText" type="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="datetime">Day & Time</label>
        <input 
          name="datetime" type="text" placeholder="Add Date and Time" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          name="reminder" type="checkbox" />
      </div>
      
      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}
