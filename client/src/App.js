import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/Addtask';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
