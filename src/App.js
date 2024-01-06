import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Objective from './components/Objective';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Achievement from './components/Achievement';

function App() {
  return (
    <div className="App lg:pr-56 lg:pl-56">
      <div className='p-2'>
        <Heading />
        <Objective />
        <Education />
        <Skills />
        <Project />
        <Achievement/>
      </div>
    </div>
  );
}

export default App;
