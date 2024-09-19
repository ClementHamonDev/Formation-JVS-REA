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
        <ProjectCard title="Mon 1er props"  description="C'est mon premier projet avec props"/>
      </main>
    </div>
  );
}

export default App;
