import './App.css';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trello</h1>
      </header>
      <main className="App-main">
        <h2>Bienvenue à cette formation</h2>
        <ProjectCard />
      </main>
    </div>
  );
}

export default App;
