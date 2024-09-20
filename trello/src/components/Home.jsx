import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ boards }) => {
  return (
    <div className="container mx-auto p-4 pt-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Trello Boards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            to={`/board/${board.id}`}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-black">{board.title}</h2>
            <p className="text-black">{board.lists.length} lists</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
