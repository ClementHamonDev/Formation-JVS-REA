import React from 'react';
import List from './List';

const Board = ({ lists }) => {
  
  return (
      <div className="flex flex-row border-2 border-black rounded-3xl m-4 min-h-screen justify-evenly">
        {lists.map(list => (
          <List key={list.id} title={list.title} initialTasks={list.tasks} listId={list.id} boardId={list.boardId} />
        ))}
      </div>
  );
};

export default Board;
