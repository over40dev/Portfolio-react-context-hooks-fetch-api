import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const tasksURL = process.env.REACT_APP_TASKS_SERVER_BASE_URL;

  /* Initiates an action at the start of a component.
  - all other actions are initiated by a change in data */
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch All Tasks from Server using Fetch API
  const fetchTasks = async () => {
    const res = await fetch(tasksURL);
    const data = await res.json();

    return data;
  };

  // Fetch Single Task from Server using Fetch API
  const fetchTask = async (id) => {
    const res = await fetch(`${tasksURL}${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    /* NEW WAY 
    - add task on server */
    const res = await fetch(tasksURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    /* data that is returned is the new task that was added including the ID created on the server. */
    const data = await res.json();
    setTasks([...tasks, data]);

    /* OLD WAY 
    - simulate adding task in UI */
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`${tasksURL}${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    // taskToToggle.reminder = !taskToToggle.reminder;

    const updatedTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`${tasksURL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: data.reminder} : task,
      ),
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          showForm={showAddTaskForm}
          onToggleForm={setShowAddTaskForm}
        />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddTaskForm && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks'
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
