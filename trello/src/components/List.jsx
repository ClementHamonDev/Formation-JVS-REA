import React from 'react';
import Task from './Task';

const List = ({ title, tasks }) => {
  return (
    <div className="text-4xl max-w-64">
      <h2>{title}</h2>
      <div className="text-lg flex flex-col gap-4 mt-4">
        {tasks.length === 0 ? (
          <p className="text-white-500">Aucune tâche</p>
        ) : (
          tasks.map(task => (
            <Task key={task.id} title={task.title} description={task.description} />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
