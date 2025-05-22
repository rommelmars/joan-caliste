import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import authorImage from '../image/author.jpg'; // You'll need to add an author image to your image folder

import {
  AuthorContainer,
  PageTitle,
  AuthorContent,
  BiographySection,
  AuthorImageContainer,
  BiographyText,
  QuoteSection,
  InterestsSection,
  InterestsList,
  InterestCard
} from '../styles/AuthorStyles';

// Import the falling leaves container for the same effect as on other pages
import { FallingLeavesContainer } from '../styles/HomeStyles';
import leafImage from '../image/leaves.png';
import flowerImage from '../image/flowers.png';

const Author = () => {
  const fallElementsContainerRef = useRef(null);
  
  // Add falling leaves and flowers effect
  React.useEffect(() => {
    // Function to create and add falling elements (leaves and flowers)
    const createFallingElements = () => {
      if (!fallElementsContainerRef.current) return;
      
      // Clear any existing elements
      fallElementsContainerRef.current.innerHTML = '';
      
      // Increased number of elements based on screen width
      const numLeaves = window.innerWidth > 768 ? 25 : 15;
      const numFlowers = window.innerWidth > 768 ? 15 : 8;
      
      // Create leaves
      for (let i = 0; i < numLeaves; i++) {
        createFallingElement(leafImage, 'leaf');
      }
      
      // Create flowers
      for (let i = 0; i < numFlowers; i++) {
        createFallingElement(flowerImage, 'flower');
      }
      
      // Function to create a single falling element (leaf or flower)
      function createFallingElement(imageUrl, className) {
        const element = document.createElement('div');
        
        // Create random properties with slower animation
        const positionX = `${Math.random() * 100}%`;
        const delay = `${Math.random() * 15}s`; // Increased delay range
        const fallDuration = `${Math.random() * 15 + 20}s`; // Between 20-35 seconds (slower)
        const scale = Math.random() * 0.6 + 0.4; // Between 0.4 and 1
        const rotation = Math.random() * 360; // Random initial rotation
        
        // Use different sizes for variety
        const size = 20 + Math.random() * 20; // Between 20px and 40px
        
        element.style.backgroundImage = `url(${imageUrl})`;
        element.style.left = positionX;
        element.style.animationDelay = delay;
        
        // Apply styles to element
        element.classList.add('falling-element', className);
        element.style.position = 'absolute';
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundSize = 'contain';
        element.style.backgroundRepeat = 'no-repeat';
        element.style.opacity = className === 'leaf' ? '0.7' : '0.8'; // Slightly different opacity
        element.style.animationName = 'fall, sway';
        element.style.animationTimingFunction = 'linear, ease-in-out';
        element.style.animationDuration = `${fallDuration}, 8s`; // Slower sway
        element.style.animationIterationCount = 'infinite';
        element.style.animationDelay = delay;
        element.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        element.style.transformOrigin = 'center';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '-1';
        
        // Add the element to container
        fallElementsContainerRef.current.appendChild(element);
      }
      
      // Add keyframes to document if not already added
      if (!document.querySelector('#falling-elements-keyframes')) {
        const style = document.createElement('style');
        style.id = 'falling-elements-keyframes';
        style.innerHTML = `
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
            animation-duration: 28s, 9s !important; /* Slightly different timing for flowers */
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
          }
        `;
        document.head.appendChild(style);
      }
    };
    
    // Create elements initially
    createFallingElements();
    
    // Recreate elements when window is resized
    window.addEventListener('resize', createFallingElements);
    
    return () => {
      window.removeEventListener('resize', createFallingElements);
      
      // Clean up styles when component unmounts
      const style = document.querySelector('#falling-elements-keyframes');
      if (style) style.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <AuthorContainer>
        <FallingLeavesContainer ref={fallElementsContainerRef} />
        
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About the Author
        </PageTitle>
        
        <AuthorContent>
          <BiographySection>
            <AuthorImageContainer
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={authorImage} alt="Joan E. Calliste" />
            </AuthorImageContainer>
            
            <BiographyText
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Joan E. Calliste</h2>
              <p>
                My name is Joan E Calliste. I'm from Trinidad and Tobago. I'm the first of eight siblings and also a Seventh Day Adventist. 
                It was in church during the children's hours where my storytelling journey began.
              </p>
              <p>
                After telling stories for a while, I decided to try writing. I had no idea what I was getting into, and now I'm enjoying 
                writing and telling stories. The name of my book reflects my love for children, which is part of my joy.
              </p>
              <p>
                My hope is that after reading the book, it will help to shape children's character in the future. Through my stories, 
                I aim to inspire young minds and instill positive values that will stay with them as they grow.
              </p>
            </BiographyText>
          </BiographySection>
          
          <QuoteSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <blockquote>
              "My love for children inspires my writing. Through storytelling, I hope to shape their character and bring joy to their lives."
            </blockquote>
            <cite>- Joan E. Calliste</cite>
          </QuoteSection>
          
          <InterestsSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Beyond Writing</h2>
            
            <InterestsList>
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="decoration decoration-1">★</span>
                <span className="decoration decoration-2">✿</span>
                <h3>Storytelling Passion</h3>
                <p>Joan's natural talent for storytelling emerged during children's hours at church, where she discovered her gift for captivating young audiences and conveying meaningful lessons through engaging narratives.</p>
              </InterestCard>
              
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="decoration decoration-1">♫</span>
                <span className="decoration decoration-2">✧</span>
                <h3>Faith Journey</h3>
                <p>As a devoted Seventh Day Adventist, Joan's faith forms an essential foundation of her storytelling. Her church experiences with children's hours developed her natural talent for engaging young minds through meaningful stories.</p>
              </InterestCard>
              
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="decoration decoration-1">♥</span>
                <span className="decoration decoration-2">❀</span>
                <h3>Family Values</h3>
                <p>Being the first of eight siblings, Joan understands the importance of family bonds and sibling relationships. These experiences shape her approach to writing stories that emphasize love, respect, and cooperation.</p>
              </InterestCard>
              
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="decoration decoration-1">✦</span>
                <span className="decoration decoration-2">♪</span>
                <h3>Character Development</h3>
                <p>Joan believes that childhood is when character is formed. Her writing focuses on helping children develop positive traits like kindness, honesty, and perseverance that will serve them throughout their lives.</p>
              </InterestCard>
            </InterestsList>
          </InterestsSection>
        </AuthorContent>
      </AuthorContainer>
      <Footer />
    </>
  );
};

export default Author;