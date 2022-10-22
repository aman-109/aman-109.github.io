
import './App.css';
import { AboutSection } from './components/About/About';
import { HeroSection } from './components/Hero/Hero';
import Simple from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Simple/>
      
      <HeroSection/>

      <AboutSection/>
    </div>
  );
}

export default App;
