import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Task from './Task';
import TaskForm from './TaskForm';
import { addTask } from '../store/boardSlice';

const List = ({ title, initialTasks, listId, boardId }) => {
  console.log({ title, initialTasks, listId, boardId });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleAddTask = (newTask) => {
    dispatch(addTask({ boardId, listId, task: newTask }));
    setMessage('La liste a été modifiée!');
  };

  return (
    <div className="text-4xl max-w-64">
      <h2>{title}</h2>
      {message && <p className="text-green-500">{message}</p>}
      <div className="text-lg flex flex-col gap-4 mt-4">
        {initialTasks.length === 0 ? (
          <p className="text-white-500">Aucune tâche</p>
        ) : (
          initialTasks.map(task => (
            <Task key={task.id} title={task.title} description={task.description} />
          ))
        )}
      </div>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default List;
