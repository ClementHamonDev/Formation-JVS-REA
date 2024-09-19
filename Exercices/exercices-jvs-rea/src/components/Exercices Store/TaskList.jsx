// components/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './taskSlice';

function TaskList() {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    dispatch(removeTask(taskToRemove));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
        style={{ 
          width: '70%', 
          padding: '10px', 
          marginRight: '10px', 
          borderRadius: '4px', 
          border: '1px solid #ccc' 
        }}
      />
      <button 
        onClick={handleAddTask}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        Ajouter
      </button>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px', 
            marginBottom: '10px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '4px',
            color: 'black',
          }}>
            {t} 
            <button 
              onClick={() => handleRemoveTask(t)}
              style={{ 
                padding: '5px 10px', 
                backgroundColor: '#f44336', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
