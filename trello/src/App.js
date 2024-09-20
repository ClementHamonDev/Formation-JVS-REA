import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import BoardDetail from './components/BoardDetail';

function App() {
  const boards = [
    {
      id: 1,
      title: "Project Alpha",
      lists: [
        {
          id: 1,
          title: "To Do",
          tasks: [
            { id: 1, title: "Task 1", description: "Description for Task 1" },
            { id: 2, title: "Task 2", description: "Description for Task 2" },
          ]
        },
        {
          id: 2,
          title: "In Progress",
          tasks: []
        },
        {
          id: 3,
          title: "Done",
          tasks: [
            { id: 4, title: "Task 4", description: "Description for Task 4" },
            { id: 5, title: "Task 5", description: "Description for Task 5" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Project Beta",
      lists: [
        {
          id: 4,
          title: "Backlog",
          tasks: [
            { id: 6, title: "Task 6", description: "Description for Task 6" },
            { id: 7, title: "Task 7", description: "Description for Task 7" },
          ]
        },
        {
          id: 5,
          title: "Review",
          tasks: [
            { id: 8, title: "Task 8", description: "Description for Task 8" },
            { id: 9, title: "Task 9", description: "Description for Task 9" },
          ]
        }
      ]
    }
  ];

  return (
    <main>
      <Router>
        <header className="min-h-20px text-center text-white text-4xl mt-6 border-b-2 border-white flex justify-between items-center px-6">
          <Link to="/" className="text-white text-2xl hover:underline">&larr; Home</Link>
          <h1>Trello Clone</h1>
          <div className="w-20"></div> {/* Spacer for balance */}
        </header>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home boards={boards} />} />
            <Route path="/board/:boardId" element={<BoardDetail boards={boards} />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
