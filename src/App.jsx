import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimationProvider } from './context/AnimationContext';
import Home from './pages/home';
import Author from './pages/author';
import Books from './pages/book';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import './App.css';

const App = () => {
  return (
    <AnimationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/books" element={<Books />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AnimationProvider>
  );
};

export default App;