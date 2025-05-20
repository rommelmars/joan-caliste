import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: 1080px) {
    padding: 5rem 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

export const FallingLeavesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  
  .falling-element {
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  
  .leaf {
    opacity: 0.7;
  }
  
  .flower {
    opacity: 0.8;
  }
`;

export const Title = styled(motion.h1)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.4rem, 5vw, 3rem); /* Reduced minimum size */
  color: #FF6B6B;
  margin-bottom: clamp(0.8rem, 2vw, 1rem);
  text-align: center;
  width: 100%;
  max-width: 100%; /* Allow full width on mobile */
  padding: 0 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.3;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0 0.75rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0 0.5rem;
    line-height: 1.2;
    max-width: 300px; /* Constrain width on mobile */
  }
  
  @media (max-width: 320px) {
    font-size: 1.3rem;
    max-width: 260px; /* Even smaller for tiny screens */
  }
`;

export const Subtitle = styled(motion.h2)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(0.9rem, 3vw, 1.8rem); /* Reduced minimum size */
  color: #4A90E2;
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  width: 100%;
  max-width: 100%; /* Allow full width on mobile */
  padding: 0 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 0.75rem;
    line-height: 1.3;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
    line-height: 1.3;
    max-width: 280px; /* Constrain width on mobile */
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    max-width: 240px; /* Even smaller for tiny screens */
  }
`;

export const LogoCarouselTrack = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 1rem 0;
  overflow: hidden;
  position: relative;
  
  .carousel-inner {
    display: flex;
    align-items: center;
    gap: 3rem;
    
    @media (max-width: 768px) {
      gap: 2rem;
    }
    
    @media (max-width: 480px) {
      gap: 1.5rem;
    }
  }
  
  .logo-item {
    flex-shrink: 0;
  }
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    
    @media (max-width: 768px) {
      width: 40px;
    }
  }
  
  &:before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 229, 229, 0.8), transparent);
  }
  
  &:after {
    right: 0;
    background: linear-gradient(to left, rgba(229, 249, 255, 0.8), transparent);
  }
`;

export const LogoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 80px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    min-width: 120px;
    height: 60px;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    min-width: 100px;
    height: 50px;
    padding: 0.75rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const LogoImage = styled.img`
  max-width: 120px;
  max-height: 50px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
  
  @media (max-width: 1080px) {
    max-width: 100px;
    max-height: 45px;
    margin: 0 1.2rem;
  }
  
  @media (max-width: 768px) {
    max-width: 80px;
    max-height: 40px;
    margin: 0 1rem;
  }
  
  @media (max-width: 480px) {
    max-width: 70px;
    max-height: 35px;
    margin: 0 0.8rem;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  margin: 2rem 0;
  max-width: 1200px;
  width: 100%;
`;

export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: clamp(1.2rem, 3vw, 2rem);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

export const CardTitle = styled.h3`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #FF6B6B;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #666;
  line-height: 1.6;
`;

export const Button = styled(motion.button)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1rem, 2vw, 1.2rem);
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 50px;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  cursor: pointer;
  margin-top: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  text-decoration: none;3
  display: inline-block;
`;

export const SectionContainer = styled(motion.section)`
  width: 100%;
  max-width: 1000px;
  margin: clamp(2rem, 5vw, 4rem) 0;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  color: #FF6B6B;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
  text-align: center;
  background: transparent;
`;

export const SectionContent = styled.div`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  
  p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }
`;

export const ReadMoreLink = styled(motion(Link))`
  display: inline-block;
  color: #4A90E2;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4A90E2;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export const ScrollDownButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: clamp(1.5rem, 4vw, 2rem) 0 clamp(2rem, 6vw, 4rem) 0;
  cursor: pointer;
`;

export const ScrollText = styled.span`
  font-family: 'Comic Sans MS', cursive;
  color: #4A90E2;
  margin-bottom: 0.5rem;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
`;

export const ScrollArrow = styled.div`
  width: clamp(15px, 2vw, 20px);
  height: clamp(15px, 2vw, 20px);
  border-right: 3px solid #4A90E2;
  border-bottom: 3px solid #4A90E2;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    40% {
      transform: rotate(45deg) translateY(10px);
    }
    60% {
      transform: rotate(45deg) translateY(5px);
    }
  }
  
  @media (max-width: 768px) {
    border-right: 2px solid #4A90E2;
    border-bottom: 2px solid #4A90E2;
  }
`;

export const AuthorContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1.5rem, 3vw, 2rem);
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const AuthorTextContent = styled.div`
  flex: 1;
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  
  p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }
`;

export const AuthorImageContainer = styled(motion.div)`
  width: clamp(150px, 25vw, 220px);
  height: clamp(150px, 25vw, 220px);
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    border-width: 4px;
  }
`;

export const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const BookSectionContainer = styled(motion.section)`
  width: 100%;
  max-width: 1000px;
  margin: clamp(2rem, 5vw, 4rem) 0;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1.5rem, 3vw, 2rem);
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const BookTextContent = styled.div`
  width: 100%;
  max-width: 50%;
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  text-align: left;
  order: 1;
  
  p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }
  
  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
    order: 2;
  }
`;

export const BookImage = styled(motion.img)`
  width: 45%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35); 
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotate(-3deg);
  background: none;
  isolation: isolate;
  position: relative;
  border: none;
  padding: 0;
  display: block;
  order: 2;
  
  @media (min-width: 1600px) {
    max-width: 500px;
  }
  
  @media (max-width: 900px) {
    width: min(450px, 90%);
    margin: 1rem 0 2rem 0;
    order: 1;
  }
  
  @media (max-width: 480px) {
    width: min(350px, 95%);
  }
  
  &:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.45);
  }
`;