import React, {useState, useEffect} from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks();
    setTasks(tasksFromServer);
  }

  getTasks();
}, []);

// Fetch Tasks using Fetch API
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();

  return data;
}


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  }

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
      <Header title="Task Tracker" showForm={showAddTaskForm} onToggleForm={setShowAddTaskForm}/>
      {showAddTaskForm && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks'
      )}
    </div>
  );
}

export default App;
