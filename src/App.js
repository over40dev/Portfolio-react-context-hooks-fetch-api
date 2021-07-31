import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const mockTasks = [
    {
      id: 1,
      name: 'Task1',
      date: (new Date(2021, 7, 1)).getDate(),
      reminder: true,
    }, {
      id: 2,
      name: 'Task2',
      date: (new Date(2021, 7, 2)).getDate(),
      reminder: false,
    }, {
      id: 3,
      name: 'Task3',
      date: (new Date(2021, 7, 3)).getDate(),
      reminder: true,
    },
  ];

  const [tasks, setTasks] = useState(mockTasks);
  
// Delete Task
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
}


  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {
        tasks.length > 0 ? 
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder} /> :
          'No Tasks'
      }
    </div>
  );
}

export default App;



