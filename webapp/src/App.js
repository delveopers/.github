import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Lander from './components/Lander';
import Navabar from './components/Navabar';
import Home from './components/Home';
import Projects from './components/Projects';
import Docs from './components/Docs';

function App() {
  return (
    <Router>
      <Navabar />
      <Routes>
        <Route path="/" element={<Lander />} />
        <Route path="/home" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;