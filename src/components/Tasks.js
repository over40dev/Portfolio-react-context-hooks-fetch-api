import {useState} from 'react';

const mockTasks = [
  {
    id: 1,
    name: 'Task1',
    date: new Date(2021, 7, 1),
    reminder: true,
  }, {
    id: 2,
    name: 'Task2',
    date: new Date(2021, 7, 2),
    reminder: false,
  }, {
    id: 3,
    name: 'Task3',
    date: new Date(2021, 7, 3),
    reminder: true,
  },
];

export default function Tasks() {

  const [tasks, setTasks] = useState(mockTasks);

  return (
    <>
      {tasks.map((task) => <h3 key={task.id} className="task">{task.name}</h3>)}
    </>
  )
}
