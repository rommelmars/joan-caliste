import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  HamburgerButton,
  HamburgerLine
} from '../styles/HeaderStyles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Close mobile menu when a new page is navigated to
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo as={Link} to="/">Joan E. Calliste Publication</Logo>
        
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <HamburgerLine $isOpen={isOpen} />
          <HamburgerLine $isOpen={isOpen} />
          <HamburgerLine $isOpen={isOpen} />
        </HamburgerButton>
        
        <NavLinks $isOpen={isOpen}>
          <NavLink 
            as={Link} 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavLink>
          
          <NavLink 
            as={Link} 
            to="/books" 
            className={location.pathname === '/books' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Books
          </NavLink>
          
          <NavLink 
            as={Link} 
            to="/author" 
            className={location.pathname === '/author' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Author
          </NavLink>
          
          <NavLink 
            as={Link} 
            to="/gallery" 
            className={location.pathname === '/gallery' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Gallery
          </NavLink>
          
          <NavLink 
            as={Link} 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;