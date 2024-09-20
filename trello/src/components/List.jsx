import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const List = ({ title, initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (tasks.length > initialTasks.length) {
      setMessage('La liste a été modifiée!');
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [tasks, initialTasks.length]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  return (
    <div className="text-4xl max-w-64">
      <h2>{title}</h2>
      {message && <p className="text-green-500">{message}</p>}
      <div className="text-lg flex flex-col gap-4 mt-4">
        {tasks.length === 0 ? (
          <p className="text-white-500">Aucune tâche</p>
        ) : (
          tasks.map(task => (
            <Task key={task.id} title={task.title} description={task.description} />
          ))
        )}
      </div>
      <TaskForm onAddTask={addTask} />
    </div>
  );
};

export default List;
