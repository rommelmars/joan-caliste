import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/book';
import Author from './pages/author';
import Contact from './pages/contact'; // Import the Contact component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/author" element={<Author />} />
          <Route path="/gallery" element={<div>Gallery Page Coming Soon</div>} />
          <Route path="/contact" element={<Contact />} /> {/* Use the Contact component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;