import './App.css'; 
import Hero from './sections/hero/hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Navbar from './sections/Navbar/Navbar'; 

function App() {
  return ( 
    <div className="App">
      <Navbar /> 
      <Hero />
      <Skills />
      <Projects /> 
    </div>
  ); 
}

export default App;
