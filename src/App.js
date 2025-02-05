import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import SAQ from './SAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/saq" element={<SAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
