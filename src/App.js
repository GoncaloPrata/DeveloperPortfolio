// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Career from './pages/Career';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className="nav-container">
          <div className="nav-left">
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/career" className="nav-link">Career</Link>
          </div>
          <div className="nav-right">
            <Link to="/certifications" className="nav-link">Certifications</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/career" element={<Career />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
