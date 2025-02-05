import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import SAQ from './SAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/website" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/saq" element={<SAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
