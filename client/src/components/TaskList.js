import React from 'react';

const TaskList = ({ tasks }) => (
  <div>
    <h2>Task List</h2>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  </div>
);

export default TaskList;
