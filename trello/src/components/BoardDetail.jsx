import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Board from './Board';

const BoardDetail = () => {
  const { boardId } = useParams();
  const board = useSelector(state => 
    state.boards.boards.find(b => b.id === parseInt(boardId))
  );
  const lists = useSelector(state => 
    state.boards.lists.filter(l => l.boardId === parseInt(boardId))
  );

  if (!board) {
    return <div>Board not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center mt-12 text-black">{board.title}</h1>
      <Board lists={lists} boardId={parseInt(boardId)} />
    </div>
  );
};

export default BoardDetail;
