import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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


function App() {

  const [tasks, setTasks] = useState(mockTasks);

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}  />
    </div>
  );
}

export default App;



