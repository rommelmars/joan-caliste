import React, { createContext, useContext, useRef, useEffect } from 'react';
import leafImage from '../image/leaves.png';
import flowerImage from '../image/flowers.png';

// Animation Manager Singleton
class AnimationManager {
  static instance;
  animationActive = false;
  continuousAnimationInterval = null;
  container = null;
  
  static getInstance() {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }
  
  setContainer(container) {
    this.container = container;
  }
  
  startAnimation() {
    if (this.animationActive || !this.container) return;
    
    this.animationActive = true;
    this.createFallingElements();
    
    // Start continuous animation
    this.continuousAnimationInterval = setInterval(() => {
      this.addNewElement();
    }, 2000);
    
    // Handle window resize
    window.addEventListener('resize', this.handleResize);
  }
  
  stopAnimation() {
    this.animationActive = false;
    if (this.continuousAnimationInterval) {
      clearInterval(this.continuousAnimationInterval);
      this.continuousAnimationInterval = null;
    }
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleResize = () => {
    if (this.animationActive && this.container) {
      this.createFallingElements();
    }
  }
  
  createFallingElements() {
    if (!this.container) return;
    
    // Clear any existing elements
    this.container.innerHTML = '';
    
    // Same element counts as author page for consistency
    const numLeaves = window.innerWidth > 768 ? 25 : 15;
    const numFlowers = window.innerWidth > 768 ? 15 : 8;
    
    // Create leaves
    for (let i = 0; i < numLeaves; i++) {
      this.createFallingElement(leafImage, 'leaf');
    }
    
    // Create flowers
    for (let i = 0; i < numFlowers; i++) {
      this.createFallingElement(flowerImage, 'flower');
    }
  }
  
  createFallingElement(imageUrl, className) {
    if (!this.container) return;
    
    const element = document.createElement('div');
    
    // Create random properties
    const positionX = `${Math.random() * 100}%`;
    const initialPosition = Math.random() * 100;
    const delay = `${Math.random() * 3}s`; 
    const fallDuration = `${Math.random() * 15 + 20}s`;
    const scale = Math.random() * 0.6 + 0.4;
    const rotation = Math.random() * 360;
    const size = 20 + Math.random() * 20;
    
    // Apply styles to element
    element.style.cssText = `
      position: absolute;
      left: ${positionX};
      top: ${initialPosition}%;
      width: ${size}px;
      height: ${size}px;
      background-image: url(${imageUrl});
      background-size: contain;
      background-repeat: no-repeat;
      opacity: ${className === 'leaf' ? '0.7' : '0.8'};
      animation-name: fall, sway;
      animation-timing-function: linear, ease-in-out;
      animation-duration: ${fallDuration}, 8s;
      animation-iteration-count: infinite;
      animation-delay: ${delay};
      transform: rotate(${rotation}deg) scale(${scale});
      transform-origin: center;
      pointer-events: none;
      z-index: 2;
    `;
    
    element.classList.add('falling-element', className);
    this.container.appendChild(element);
  }
  
  addNewElement() {
    if (!this.container || !this.animationActive) return;
    
    const isFlower = Math.random() > 0.7;
    const className = isFlower ? 'flower' : 'leaf';
    const imageUrl = isFlower ? flowerImage : leafImage;
    
    const element = document.createElement('div');
    
    // New elements always start from the top
    element.style.cssText = `
      position: absolute;
      left: ${Math.random() * 100}%;
      top: -10%;
      width: ${20 + Math.random() * 20}px;
      height: ${20 + Math.random() * 20}px;
      background-image: url(${imageUrl});
      background-size: contain;
      background-repeat: no-repeat;
      opacity: ${className === 'leaf' ? '0.7' : '0.8'};
      animation-name: fall, sway;
      animation-timing-function: linear, ease-in-out;
      animation-duration: ${Math.random() * 15 + 20}s, 8s;
      animation-iteration-count: infinite;
      animation-delay: 0s;
      transform: rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.6 + 0.4});
      transform-origin: center;
      pointer-events: none;
      z-index: 2;
    `;
    
    element.classList.add('falling-element', className);
    this.container.appendChild(element);
    
    // Remove oldest element if too many
    if (this.container.children.length > 60) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}

// Create context
const AnimationContext = createContext();

// Create provider component
export const AnimationProvider = ({ children }) => {
  const containerRef = useRef(null);
  const animationManager = useRef(AnimationManager.getInstance());
  
  // Set up keyframes once
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.querySelector('#falling-elements-keyframes')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'falling-elements-keyframes';
      styleElement.innerHTML = `
        @keyframes fall {
          0% {
            top: -10%;
            transform: rotate(0deg);
          }
          100% {
            top: 110%;
            transform: rotate(360deg);
          }
        }
        
        @keyframes sway {
          0% {
            margin-left: 0px;
          }
          25% {
            margin-left: 50px;
          }
          50% {
            margin-left: -50px;
          }
          75% {
            margin-left: 50px;
          }
          100% {
            margin-left: 0px;
          }
        }
        
        /* Flower specific animation adjustment */
        .flower {
          animation-duration: 28s, 9s !important;
          filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
        }
      `;
      document.head.appendChild(styleElement);
    }
  }, []);
  
  // Initialize animation
  useEffect(() => {
    if (containerRef.current) {
      animationManager.current.setContainer(containerRef.current);
      animationManager.current.startAnimation();
    }
    
    return () => {
      // Don't stop the animation when component unmounts
    };
  }, []);
  
  // Only when the app is about to close/unload, stop the animation
  useEffect(() => {
    const handleBeforeUnload = () => {
      animationManager.current.stopAnimation();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return (
    <AnimationContext.Provider value={{ animationManager: animationManager.current }}>
      <div 
        ref={containerRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 2,
          overflow: 'hidden'
        }}
      />
      {children}
    </AnimationContext.Provider>
  );
};

// Custom hook to use animation
export const useAnimation = () => useContext(AnimationContext);

export default AnimationContext;