import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-white font-bold">Mini Trello</h1>
        </div>

        {/* Right side */}
        <a href="https://github.com/crediblebilal/trello-clone" target='_blank' className="text-white text-2xl hover:text-black"> <AiOutlineGithub /> </a>
      </div>
    </nav>
  );
}

export default Navbar;