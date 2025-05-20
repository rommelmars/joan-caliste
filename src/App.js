import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/book';
import Author from './pages/author';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import { AnimationProvider } from './context/AnimationContext';
import './App.css';

function App() {
  return (
    <Router>
      <AnimationProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/author" element={<Author />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;