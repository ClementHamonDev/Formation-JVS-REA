import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const lists = [
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
      tasks: [
      ]
    },
    {
      id: 3,
      title: "Done",
      tasks: [
        { id: 4, title: "Task 4", description: "Description for Task 4" },
        { id: 5, title: "Task 5", description: "Description for Task 5" },
      ]
    },
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
        { id: 10, title: "Task 10", description: "Description for Task 10" },
        { id: 11, title: "Task 11", description: "Description for Task 11" },
        { id: 12, title: "Task 12", description: "Description for Task 12" },
        { id: 13, title: "Task 13", description: "Description for Task 13" },
        { id: 14, title: "Task 14", description: "Description for Task 14" },
        { id: 15, title: "Task 15", description: "Description for Task 15" },
        { id: 16, title: "Task 16", description: "Description for Task 16" },
        { id: 17, title: "Task 17", description: "Description for Task 17" }
      ]
    } 
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trello Board</h1>
      </header>
      <Board lists={lists} />
    </div>
  );
}

export default App;
