import './App.css'; 
import Hero from './sections/hero/hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return ( 
    <div className="App">
      <Hero />
      <Skills />
      <Projects /> 
    </div>
  ); 
}

export default App;
