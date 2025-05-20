import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import { AnimationProvider } from '../context/AnimationContext';
import leafImage from '../image/leaves.png';
import flowerImage from '../image/flowers.png';

// Import FallingLeavesContainer from HomeStyles
import { FallingLeavesContainer } from '../styles/HomeStyles';

// Import Gallery styled components
import {
  GalleryContainer,
  GalleryIntro,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  GalleryCaption,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxCaption,
  LightboxNavigation,
  CloseButton
} from '../styles/GalleryStyles';

// Import gallery images
import gallery1 from '../image/gallery1.jpg';
import gallery2 from '../image/gallery2.jpg';
import gallery3 from '../image/gallery3.jpg';
import gallery4 from '../image/gallery4.jpg';
import gallery5 from '../image/gallery5.jpg';
import gallery6 from '../image/gallery6.jpg';
import gallery7 from '../image/gallery7.jpg';

const Gallery = () => {
  const fallElementsContainerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery images with captions
  const galleryImages = [
    {
      src: gallery1,
      alt: 'Joan Calliste at a book signing',
      caption: 'Book Signing Event',
      description: 'Joan meeting with readers and signing copies of "Love for the Children" at a local bookstore.'
    },
    {
      src: gallery2,
      alt: 'Joan Calliste reading to children',
      caption: 'Story Time with Joan',
      description: 'Joan sharing her stories with enthusiastic young readers at a community library event.'
    },
    {
      src: gallery3,
      alt: 'Joan Calliste with her book',
      caption: 'Author Portrait',
      description: 'Joan with her first published book, "Love for the Children".'
    },
    {
      src: gallery4,
      alt: 'Joan Calliste at a writing workshop',
      caption: 'Writing Workshop',
      description: 'Joan leading a creative writing workshop for aspiring young authors.'
    },
    {
      src: gallery5,
      alt: 'Joan Calliste in her hometown in Trinidad',
      caption: 'Trinidad Roots',
      description: 'Joan visiting her hometown in Trinidad, where her storytelling journey began.'
    },
    {
      src: gallery6,
      alt: 'Joan Calliste at church event',
      caption: 'Faith and Writing',
      description: 'Joan speaking about how her faith influences her writing at a church event.'
    },
    {
      src: gallery7,
      alt: 'Joan Calliste with young readers',
      caption: 'Inspiring Young Minds',
      description: 'Joan with a group of young readers who were inspired by her stories.'
    }
  ];
  
  // Handle opening the lightbox
  const openLightbox = (index) => {
    setSelectedImage(index);
  };
  
  // Handle closing the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  // Navigate to the next image in lightbox
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };
  
  // Navigate to the previous image in lightbox
  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  
  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);
  
  // Add falling leaves and flowers effect - consistent with other pages
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
    <AnimationProvider>
      <Header />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%)',
        padding: '6rem 2rem 4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: '1'
      }}>
        <FallingLeavesContainer ref={fallElementsContainerRef} />
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Comic Sans MS, cursive',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            color: '#FF6B6B',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          Gallery
        </motion.h1>
        
        <GalleryContainer>
          <GalleryIntro
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Welcome to Joan E. Calliste's gallery! Here you can explore moments from Joan's journey as an author, her community engagements, and the impact of her work with children.</p>
            <p>From book signings to reading sessions, these images capture Joan's dedication to inspiring young minds and sharing her stories with the world.</p>
          </GalleryIntro>
          
          <GalleryGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {galleryImages.map((image, index) => (
              <GalleryItem 
                key={index}
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <GalleryImage src={image.src} alt={image.alt} />
                <GalleryCaption>
                  <h3>{image.caption}</h3>
                  <p>{image.description}</p>
                </GalleryCaption>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GalleryContainer>
        
        <AnimatePresence>
          {selectedImage !== null && (
            <LightboxOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <LightboxContent
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={closeLightbox}>×</CloseButton>
                <LightboxImage 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].alt} 
                />
                <LightboxCaption>
                  <h3>{galleryImages[selectedImage].caption}</h3>
                  <p>{galleryImages[selectedImage].description}</p>
                </LightboxCaption>
                <LightboxNavigation>
                  <button onClick={prevImage}>‹</button>
                  <button onClick={nextImage}>›</button>
                </LightboxNavigation>
              </LightboxContent>
            </LightboxOverlay>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </AnimationProvider>
  );
};

export default Gallery;