import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0; /* Reduced from 1.5rem */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem; /* Reduced from 2rem */
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 0.8rem; /* Reduced from 1.5rem */
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem; /* Reduced from 1.5rem */
  margin-bottom: 0.5rem; /* Reduced from 1rem */
`;

export const SocialIcon = styled(motion.a)`
  color: #4A90E2;
  font-size: 1.2rem; /* Reduced from 1.5rem */
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #FF6B6B;
  }
`;

export const Copyright = styled.p`
  font-family: 'Arial', sans-serif;
  color: #666;
  font-size: 0.8rem; /* Reduced from 0.9rem */
  text-align: center;
`;

export const FooterLink = styled(motion.a)`
  color: #4A90E2;
  text-decoration: none;
  position: relative;
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.8rem; /* Added smaller font size */
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px; /* Reduced from 2px */
    bottom: -2px; /* Reduced from -3px */
    left: 0;
    background-color: #FF6B6B;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export const FooterLogo = styled.div`
  font-family: 'Comic Sans MS', cursive;
  font-size: 1rem; /* Reduced from 1.2rem */
  font-weight: bold;
  color: #FF6B6B;
  margin-bottom: 0.3rem; /* Reduced from 0.5rem */
`;