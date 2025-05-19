import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.5rem; /* Reduced from 1.8rem to fit longer text */
  font-weight: bold;
  color: #FF6B6B;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 1.3rem; /* Further reduced for tablets */
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem; /* Even smaller for mobile devices */
    max-width: 60%; /* Limit width on smallest screens */
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 480px) {
    position: absolute;
    flex-direction: column;
    background: white;
    top: 100%;
    right: ${props => (props.$isOpen ? '0' : '-100%')};
    width: 70%;
    height: calc(100vh - 70px);
    padding: 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled(motion.a)`
  margin: 0 1rem;
  color: #4A90E2;
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #FF6B6B;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  &.active {
    color: #FF6B6B;
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
  }
`;

export const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;
  background-color: #4A90E2;
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${props => props.$isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.$isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
  }
`;