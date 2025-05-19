import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes when you create those pages */}
          <Route path="/books" element={<div>Books Page Coming Soon</div>} />
          <Route path="/author" element={<div>Author Page Coming Soon</div>} />
          <Route path="/gallery" element={<div>Gallery Page Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;