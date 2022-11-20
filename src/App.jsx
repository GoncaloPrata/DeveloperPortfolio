import React from 'react';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import TechnologiesAndLanguages from './components/TechnologiesAndLanguages';
import WorkExperience from './components/WorkExperience';


function App() {
  return (
    <div className="App">
        <Intro />
        <WorkExperience />
        <Portfolio />
        <TechnologiesAndLanguages />
        <Contact />
    </div>
  )
}

export default App
