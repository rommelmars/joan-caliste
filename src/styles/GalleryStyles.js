import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const GalleryIntro = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(2rem, 5vw, 3rem);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

export const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 22px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 18px;
  }
`;

export const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  height: 0;
  padding-bottom: 100%; /* Changed to 100% for a perfect square aspect ratio */
  background-color: #f0f0f0;
  border: 5px solid white; /* Increased border width from 3px to 5px */
  
  &:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
    transform: translateY(-5px);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed from cover to contain to prevent cropping */
  background-color: #f0f0f0; /* Added background color to fill empty space */
  padding: 5px; /* Added padding inside to prevent image from touching borders */
  transition: transform 0.5s ease;
  border-radius: 12px; /* Slightly reduced from 15px to account for padding */
`;

export const GalleryCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
  color: white;
  font-family: 'Comic Sans MS', cursive;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  border-radius: 0 0 15px 15px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  }
  
  p {
    font-size: 0.9rem;
    font-family: 'Arial', sans-serif;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  }
  
  ${GalleryItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const LightboxContent = styled(motion.div)`
  position: relative;
  max-width: 92%;
  max-height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 75vh; /* Reduced from 80vh to leave more room for caption */
  object-fit: contain;
  border-radius: 5px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2); /* Added border for better visibility */
`;

export const LightboxCaption = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
  font-family: 'Comic Sans MS', cursive;
  width: 100%;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  }
  
  p {
    font-family: 'Arial', sans-serif;
    margin-top: 8px;
    font-size: 1rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
`;

export const LightboxNavigation = styled.div`
  position: absolute;
  top: 50%;
  width: 110%; /* Wider than content for easier clicking */
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none; /* This allows clicks to pass through to background */
  
  button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-size: 28px;
    transition: background 0.3s ease, transform 0.2s ease;
    pointer-events: auto; /* Re-enable clicks on buttons */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.4);
      transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 24px;
    }
    
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 24px;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 22px;
    top: -45px;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 20px;
    top: -40px;
  }
`;