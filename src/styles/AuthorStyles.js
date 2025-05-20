import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AuthorContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1080px) {
    padding: 5rem 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

export const PageTitle = styled(motion.h1)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.8rem, 5vw, 3rem);
  color: #FF6B6B;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  text-align: center;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  gap: 3rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const BiographySection = styled(motion.section)`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const AuthorImageContainer = styled(motion.div)`
  flex: 0 0 40%;
  max-width: 400px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 300px;
  }
`;

export const BiographyText = styled(motion.div)`
  flex: 1;
  
  h2 {
    font-family: 'Comic Sans MS', cursive;
    color: #4A90E2;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  
  p {
    font-family: 'Arial', sans-serif;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    color: #444;
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    
    h2 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const QuoteSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: default;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.05) 0%,
      rgba(74, 144, 226, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  blockquote {
    font-family: 'Comic Sans MS', cursive;
    font-style: italic;
    color: #FF6B6B;
    font-size: 1.3rem;
    line-height: 1.7;
    margin: 0;
    transition: transform 0.4s ease, color 0.4s ease;
    position: relative;
    z-index: 1;
  }
  
  cite {
    display: block;
    margin-top: 1rem;
    font-family: 'Arial', sans-serif;
    font-style: normal;
    color: #4A90E2;
    font-weight: bold;
    transition: color 0.4s ease;
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border: 2px solid;
    border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #FF6B6B) 1;
    animation: quoteBorderAnimation 4s linear infinite;
    
    &::before {
      opacity: 1;
      animation: quoteGradientShift 4s ease infinite alternate;
    }
    
    blockquote {
      transform: scale(1.02);
      animation: quoteColorChange 6s infinite alternate;
    }
    
    cite {
      animation: citeColorChange 6s infinite alternate;
    }
  }
  
  @keyframes quoteBorderAnimation {
    0% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #FF6B6B) 1;
    }
    50% {
      border-image: linear-gradient(to right, #4A90E2, #FF6B6B, #4A90E2) 1;
    }
    100% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #FF6B6B) 1;
    }
  }
  
  @keyframes quoteGradientShift {
    0% {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%);
    }
    50% {
      background: linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%);
    }
    100% {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%);
    }
  }
  
  @keyframes quoteColorChange {
    0% { color: #FF6B6B; }
    50% { color: #FF8E8E; }
    75% { color: #FF6B6B; }
    100% { color: #E45858; }
  }
  
  @keyframes citeColorChange {
    0% { color: #4A90E2; }
    50% { color: #5DA0F2; }
    75% { color: #4A90E2; }
    100% { color: #3A80D2; }
  }
`;

export const InterestsSection = styled(motion.section)`
  h2 {
    font-family: 'Comic Sans MS', cursive;
    color: #4A90E2;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const InterestsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const InterestCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  border: 3px solid transparent;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.1) 0%,
      rgba(74, 144, 226, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  /* Add floating stars/sparkles effect on hover */
  &::after {
    content: '✨';
    position: absolute;
    font-size: 1.2rem;
    opacity: 0;
    transition: all 0.5s ease;
    pointer-events: none;
  }
  
  h3 {
    font-family: 'Comic Sans MS', cursive;
    color: #FF6B6B;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    transition: transform 0.3s ease, color 0.3s ease;
    position: relative;
    display: inline-block;
  }
  
  /* Decorative underline for heading on hover */
  h3::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #FF6B6B, #4A90E2);
    transition: width 0.4s ease;
  }
  
  p {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #444;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative;
  }
  
  /* Add multiple decorative elements that only show on hover */
  .decoration {
    position: absolute;
    opacity: 0;
    transition: all 0.6s ease;
    pointer-events: none;
  }
  
  .decoration-1 {
    top: 10%;
    right: 5%;
    color: #FF6B6B;
    font-size: 1.4rem;
  }
  
  .decoration-2 {
    bottom: 15%;
    left: 8%;
    color: #4A90E2;
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 3px solid;
    border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #8A2BE2, #FF6B6B) 1;
    animation: borderAnimation 3s linear infinite;
    
    &::before {
      opacity: 1;
      animation: gradientShift 3s ease infinite alternate;
    }
    
    &::after {
      content: '✨';
      opacity: 1;
      animation: sparkleFloat 3s ease-in-out infinite;
    }
    
    h3 {
      transform: scale(1.05);
      animation: colorChange 4s infinite alternate;
      
      /* Show underline animation on hover */
      &::after {
        width: 100%;
      }
    }
    
    p {
      color: #333;
      transform: translateY(-2px);
    }
    
    .decoration {
      opacity: 1;
    }
    
    .decoration-1 {
      animation: float1 3s ease-in-out infinite;
    }
    
    .decoration-2 {
      animation: float2 4s ease-in-out infinite;
    }
  }
  
  @keyframes borderAnimation {
    0% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #8A2BE2, #FF6B6B) 1;
    }
    25% {
      border-image: linear-gradient(to right, #4A90E2, #8A2BE2, #FF6B6B, #4A90E2) 1;
    }
    50% {
      border-image: linear-gradient(to right, #8A2BE2, #FF6B6B, #4A90E2, #8A2BE2) 1;
    }
    75% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #8A2BE2, #FF6B6B) 1;
    }
    100% {
      border-image: linear-gradient(to right, #4A90E2, #8A2BE2, #FF6B6B, #4A90E2) 1;
    }
  }
  
  @keyframes gradientShift {
    0% {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);
    }
    50% {
      background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
    }
    100% {
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%);
    }
  }
  
  @keyframes colorChange {
    0% { color: #FF6B6B; }
    33% { color: #4A90E2; }
    66% { color: #8A2BE2; }
    100% { color: #FF6B6B; }
  }
  
  @keyframes sparkleFloat {
    0% { top: 10%; left: 10%; }
    25% { top: 15%; left: 30%; }
    50% { top: 25%; left: 15%; }
    75% { top: 20%; left: 25%; }
    100% { top: 10%; left: 10%; }
  }
  
  @keyframes float1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translateY(0) rotate(5deg); }
    50% { transform: translateY(-8px) rotate(-5deg); }
  }
`;