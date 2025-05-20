import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled.div`
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

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const ContactIntro = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  
  h2 {
    font-family: 'Comic Sans MS', cursive;
    color: #4A90E2;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    font-family: 'Arial', sans-serif;
    line-height: 1.7;
    color: #444;
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
    
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`;

export const ContactFormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  /* Add decorative elements */
  &::before {
    content: "✉️";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    opacity: 0.15;
    transform: rotate(-15deg);
  }
  
  &::after {
    content: "📝";
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    opacity: 0.15;
    transform: rotate(15deg);
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:focus-within label {
    color: #4A90E2;
    transform: translateY(-12px) scale(0.9);
  }
`;

export const FormLabel = styled.label`
  font-family: 'Comic Sans MS', cursive;
  color: #666;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #FF6B6B;
  }
  
  span {
    color: #FF6B6B;
    margin-left: 0.25rem;
  }
`;

export const FormInput = styled.input`
  font-family: 'Arial', sans-serif;
  padding: 0.8rem 1rem;
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:hover {
    border-color: rgba(74, 144, 226, 0.5);
  }
`;

export const FormTextarea = styled.textarea`
  font-family: 'Arial', sans-serif;
  padding: 0.8rem 1rem;
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:hover {
    border-color: rgba(74, 144, 226, 0.5);
  }
`;

export const SubmitButton = styled(motion.button)`
  background: linear-gradient(to right, #FF6B6B, #FF8E8E);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  /* Rainbow shimmer effect on hover */
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.1) 50%, 
      rgba(255,255,255,0) 100%);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  &:hover:not(:disabled):before {
    animation: shimmer 1.5s infinite;
    opacity: 1;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

export const FormMessage = styled(motion.div)`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-family: 'Comic Sans MS', cursive;
  
  &.success {
    background-color: rgba(75, 181, 67, 0.2);
    color: #2c741c;
    border: 1px solid rgba(75, 181, 67, 0.4);
  }
  
  &.error {
    background-color: rgba(255, 107, 107, 0.2);
    color: #d32f2f;
    border: 1px solid rgba(255, 107, 107, 0.4);
  }
`;

export const ContactDecorationImage = styled(motion.img)`
  position: absolute;
  opacity: 0.15;
  pointer-events: none;
  z-index: -1;
`;

export const DecorationLeft = styled(ContactDecorationImage)`
  left: 2%;
  bottom: 10%;
  width: 180px;
  max-width: 20%;
  transform: rotate(-15deg);
`;

export const DecorationRight = styled(ContactDecorationImage)`
  right: 2%;
  top: 15%;
  width: 150px;
  max-width: 20%;
  transform: rotate(10deg);
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-left: 0.5rem;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;