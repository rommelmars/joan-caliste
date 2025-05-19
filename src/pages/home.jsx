import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer'; // Import the Footer component
import leafImage from '../image/leaves.png';
import flowerImage from '../image/flowers.png';
import authorImage from '../image/author1.jpg';
import bookCover from '../image/cover.png'; // Import book cover image

// Import retailer logos
import amazonLogo from '../image/amazon.png';
import barnesLogo from '../image/barnesandnoble.jpg';
import ebayLogo from '../image/ebay.png';
import thriftbooksLogo from '../image/thriftbooks.png';
import walmartLogo from '../image/walmart.png';
import readingsLogo from '../image/readings.png';

import {
  HomeContainer,
  Title,
  Subtitle,
  Button,
  SectionContainer,
  SectionTitle,
  SectionContent,
  ReadMoreLink,
  ScrollDownButton,
  ScrollArrow,
  ScrollText,
  FallingLeavesContainer,
  LogoCarouselTrack,
  LogoImage,
  AuthorContentWrapper,
  AuthorTextContent,
  AuthorImageContainer,
  AuthorImage,
  BookSectionContainer,
  BookTextContent,
  BookImage
} from '../styles/HomeStyles';

const Home = () => {
  const fallElementsContainerRef = useRef(null);
  const carouselRef = useRef(null);
  
  const retailers = [
    { name: 'Amazon', logo: amazonLogo, url: 'https://amazon.com' },
    { name: 'Barnes & Noble', logo: barnesLogo, url: 'https://www.barnesandnoble.com' },
    { name: 'Walmart', logo: walmartLogo, url: 'https://www.walmart.com' },
    { name: 'eBay', logo: ebayLogo, url: 'https://www.ebay.com' },
    { name: 'ThriftBooks', logo: thriftbooksLogo, url: 'https://www.thriftbooks.com' },
    { name: 'Readings', logo: readingsLogo, url: 'https://www.readings.com.au' }
  ];
  
  useEffect(() => {
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
        const swayDistance = `${Math.random() * 80}px`;
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
        element.style.opacity = className === 'leaf' ? '0.7' : '0.8'; // Slightly different opacity for variety
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

  const handleRetailerClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <FallingLeavesContainer ref={fallElementsContainerRef} />
        
        <Element name="top">
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Joan E. Calliste's World
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover enchanting stories and illustrations
          </Subtitle>
          
          {/* Retailer logo carousel with no title - fixed animation */}
          <LogoCarouselTrack ref={carouselRef}>
            <motion.div
              className="carousel-inner"
              animate={{
                x: [0, -1800]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }
              }}
            >
              {/* Single set of logos with proper spacing */}
              {retailers.map((retailer, index) => (
                <LogoImage 
                  key={`${retailer.name}-${index}`}
                  src={retailer.logo} 
                  alt={`${retailer.name} logo`}
                  as={motion.img}
                  whileHover={{ y: -5 }}
                  onClick={() => handleRetailerClick(retailer.url)}
                  className="logo-item"
                />
              ))}
              
              {/* Duplicate set for seamless infinite scroll */}
              {retailers.map((retailer, index) => (
                <LogoImage 
                  key={`${retailer.name}-dup-${index}`}
                  src={retailer.logo} 
                  alt={`${retailer.name} logo`}
                  as={motion.img}
                  whileHover={{ y: -5 }}
                  onClick={() => handleRetailerClick(retailer.url)}
                  className="logo-item"
                />
              ))}
              
              {/* Second duplicate set to ensure no gaps */}
              {retailers.map((retailer, index) => (
                <LogoImage 
                  key={`${retailer.name}-dup2-${index}`}
                  src={retailer.logo} 
                  alt={`${retailer.name} logo`}
                  as={motion.img}
                  whileHover={{ y: -5 }}
                  onClick={() => handleRetailerClick(retailer.url)}
                  className="logo-item"
                />
              ))}
            </motion.div>
          </LogoCarouselTrack>
          
          <ScrollDownButton
            as={ScrollLink}
            to="books"
            smooth={true}
            duration={800}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ y: 5 }}
          >
            <ScrollText>Scroll Down</ScrollText>
            <ScrollArrow />
          </ScrollDownButton>
        </Element>

        <Element name="books">
          <BookSectionContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <BookTextContent>
              <SectionTitle>Enchanting Books</SectionTitle>
              <p>
                Dive into a world of imagination with beautifully illustrated children's books
                that captivate young readers. Each story is crafted with care, designed to
                inspire creativity, empathy, and a love for reading in children of all ages.
              </p>
              <p>
                From magical adventures to heartwarming tales of friendship, my books explore
                themes that resonate with children while helping them learn important life lessons.
              </p>
              <ReadMoreLink as={Link} to="/books" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Discover All Books →
              </ReadMoreLink>
            </BookTextContent>
            
            <BookImage 
              src={bookCover} 
              alt="Book Cover" 
              as={motion.img}
              initial={{ opacity: 0, y: -30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                boxShadow: "0 35px 70px rgba(0, 0, 0, 0.45)"
              }}
            />
          </BookSectionContainer>
        </Element>

        <Element name="author">
          <SectionContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>About the Author</SectionTitle>
            <AuthorContentWrapper>
              <AuthorTextContent>
                <p>
                  Joan E. Calliste is a passionate children's book author and illustrator with a 
                  unique talent for creating worlds that spark wonder and joy in young readers.
                </p>
                <p>
                  With a background in early childhood education and a lifelong love of art, Joan 
                  creates stories that not only entertain but also help children develop empathy, 
                  curiosity, and a deeper understanding of the world around them.
                </p>
                <ReadMoreLink as={Link} to="/author" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Learn More About Joan →
                </ReadMoreLink>
              </AuthorTextContent>
              
              <AuthorImageContainer
                as={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <AuthorImage 
                  src={authorImage} 
                  alt="Joan E. Calliste" 
                />
              </AuthorImageContainer>
            </AuthorContentWrapper>
          </SectionContainer>
        </Element>

        <Element name="gallery">
          <SectionContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Gallery</SectionTitle>
            <SectionContent>
              <p>
                Explore a collection of vibrant illustrations that bring stories to life. From 
                whimsical characters to breathtaking landscapes, each artwork is created with 
                attention to detail and a touch of magic.
              </p>
              <p>
                The gallery showcases original illustrations from published books as well as 
                exclusive artwork that provides a glimpse into the creative process behind the stories.
              </p>
              <ReadMoreLink as={Link} to="/gallery" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Full Gallery →
              </ReadMoreLink>
            </SectionContent>
          </SectionContainer>
        </Element>

        <Button
          as={Link}
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          Get in Touch
        </Button>
      </HomeContainer>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default Home;