import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-white font-bold">Mini Trello</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;