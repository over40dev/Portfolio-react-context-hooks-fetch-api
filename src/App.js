import {useState} from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const mockTasks = [
    {
      id: 1,
      name: 'Task1',
      date: (new Date(2021, 7, 1)).toDateString(),
      time: '',
      reminder: true,
    },
    {
      id: 2,
      name: 'Task2',
      date: (new Date(2021, 7, 2)).toDateString(),
      time: '19:11',
      reminder: false,
    },
    {
      id: 3,
      name: 'Task3',
      date: (new Date(2021, 7, 3)).toDateString(),
      time: '',
      reminder: true,
    },
  ];

  const [tasks, setTasks] = useState(mockTasks);

  // Add Task
  const addTask = (task) => {
    console.log(task);
  }

  // Delete Task
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task,
      ),
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks'
      )}
    </div>
  );
}

export default App;
