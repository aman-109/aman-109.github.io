
import './App.css';
import { AboutSection } from './components/About/About';
import SplitScreen from './components/Hero/Hero';
import Simple from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Simple/>
      <SplitScreen/>
      <AboutSection/>
    </div>
  );
}

export default App;
