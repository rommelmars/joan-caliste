import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BooksContainer = styled.div`
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

export const BooksGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export const BookCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const BookImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 140%; /* Aspect ratio for book covers */
  overflow: hidden;
`;

export const BookImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const BookInfo = styled.div`
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const BookTitle = styled.h2`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #4A90E2;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

export const BookDescription = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

export const BookDetailsButton = styled(motion.button)`
  font-family: 'Comic Sans MS', cursive;
  font-size: 1rem;
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff5252;
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  }
`;

export const IntroSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(2rem, 5vw, 3rem);
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1000px;
`;

export const FilterButton = styled(motion.button)`
  background: ${props => props.active ? '#FF6B6B' : 'white'};
  color: ${props => props.active ? 'white' : '#4A90E2'};
  border: 2px solid ${props => props.active ? '#FF6B6B' : '#4A90E2'};
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#ff5252' : '#f0f7ff'};
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const AgeRangeBar = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.2rem;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    font-family: 'Comic Sans MS', cursive;
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #4A90E2;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const RangeSlider = styled.input`
  flex-grow: 1;
  -webkit-appearance: none;
  height: 8px;
  background: #E0E0E0;
  border-radius: 5px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FF6B6B;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FF6B6B;
    cursor: pointer;
    border: none;
  }
`;

export const RangeValue = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #555;
  white-space: nowrap;
  padding: 0 0.5rem;
  min-width: 80px;
  text-align: center;
`;

export const BookDetailModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1000px; /* Increased from 900px to 1000px */
  max-height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1080px) {
    max-width: 95%; /* Slightly increased from 90% to 95% */
  }
  
  @media (max-width: 480px) {
    max-width: 98%; /* Slightly increased from 95% to 98% */
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.5rem; /* Increased padding for more space */
  border-bottom: 1px solid #eee;
  
  h2 {
    font-family: 'Comic Sans MS', cursive;
    font-size: clamp(1.5rem, 2.5vw, 2rem); /* Slightly larger font */
    color: #4A90E2;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem; /* Slightly larger */
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #FF6B6B;
  }
`;

export const ModalBody = styled.div`
  padding: 2.5rem; /* Increased from 2rem to 2.5rem */
  display: flex;
  gap: 3rem; /* Increased from 2rem to 3rem for more spacing between image and content */
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

export const ModalImageContainer = styled.div`
  flex: 0 0 300px; /* Increased from 250px to 300px for larger image */
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    max-width: 240px; /* Increased from 200px to 240px */
    margin: 0 auto;
  }
`;

export const ModalInfo = styled.div`
  flex: 1;
  
  h3 {
    font-family: 'Comic Sans MS', cursive;
    font-size: clamp(1.3rem, 2vw, 1.6rem);
    color: #FF6B6B;
    margin-bottom: 1.2rem; /* Slightly increased */
    margin-top: 1.5rem; /* Added margin-top for section spacing */
  }
  
  h3:first-child {
    margin-top: 0; /* Remove top margin from first heading */
  }
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.1rem); /* Slightly larger font */
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }
  
  ul {
    margin: 1.2rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.7rem; /* Slightly increased */
      font-family: 'Arial', sans-serif;
      font-size: clamp(1rem, 1.5vw, 1.1rem); /* Slightly larger font */
      color: #555;
      line-height: 1.6;
    }
  }
`;

export const BuyButton = styled(motion.a)`
  display: inline-block;
  background: #FF6B6B;
  color: white;
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1rem, 1.5vw, 1.2rem); /* Slightly larger */
  text-decoration: none;
  padding: 1rem 2rem; /* Increased from 0.8rem 1.5rem to 1rem 2rem */
  border-radius: 50px;
  margin-top: 1.5rem; /* Increased from 1rem */
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff5252;
    box-shadow: 0 5px 20px rgba(255, 107, 107, 0.5);
  }
`;