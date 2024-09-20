import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import BoardDetail from './components/BoardDetail';

function App() {
  const boards = useSelector(state => state.boards.boards);

  return (
    <main>
      <Router>
        <header className="min-h-20px text-center text-white text-4xl mt-6 border-b-2 border-white flex justify-between items-center px-6">
          <Link to="/" className="text-white text-2xl hover:underline">&larr; Home</Link>
          <h1>Trello Clone</h1>
          <div className="w-20"></div>
        </header>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home boards={boards} />} />
            <Route path="/board/:boardId" element={<BoardDetail />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;