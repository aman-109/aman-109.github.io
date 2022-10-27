
import './App.css';
import { AboutSection } from './components/About/About';
import ContactForm from './components/Contact/Contact';
// import ContactFormWithSocialButtons from './components/Contact/Contact';
import GithubStat from './components/Github/GithubStat';
// import Graph from './components/Github/Github';
import SplitScreen from './components/Hero/Hero';
import Simple from './components/Navbar/Navbar';
import { ProjectsSection } from './components/Project/Project';
import { SkillsSection } from './components/Skill/SkillsSection';

function App() {
  return (
    <div className="App">
      
      <Simple/>
  
      <SplitScreen/>

      <AboutSection/>
      
      <SkillsSection/>

      <ProjectsSection/>

      <GithubStat/>

      <ContactForm/>
    </div>
  );
}

export default App;
