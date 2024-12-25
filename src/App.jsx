import './App.css'; 
import Hero from './sections/Hero/Hero'; 
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Navbar from './sections/Navbar/Navbar'; 
import Footer from './sections/Footer/Footer';
import Contact from './sections/Contact/Contact';

function App() {
  return ( 
    <div className="App">
      <Navbar /> 
      <Hero />
      <Skills />
      <Projects /> 
      <Contact /> 
      <Footer /> 
    </div>
  ); 
}

export default App;
 