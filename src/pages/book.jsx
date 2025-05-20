import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import bookCover1 from '../image/book1.png'; // First book cover image
import bookCover2 from '../image/book2.png'; // Second book cover image
import bookFrontImage from '../image/bookfront.jpg'; // Modal image for first book
import bookFrontImage2 from '../image/bookfront2.jpg';
import leafImage from '../image/leaves.png';
import flowerImage from '../image/flowers.png';

import {
  BooksContainer,
  PageTitle,
  BookDetailModal,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalImageContainer,
  ModalInfo,
  BuyButton
} from '../styles/BookStyles';

// Import FallingLeavesContainer from HomeStyles
import { FallingLeavesContainer } from '../styles/HomeStyles';

const Books = () => {
  // Book data array with multiple books
  const booksData = [
    {
      id: 1,
      title: "The Magical Adventure",
      coverImage: bookCover1,
      modalImage: bookFrontImage,
      description: "Join Lucy on a magical adventure through enchanted forests and mystical lands.",
      ageRange: "5-9",
      category: "faith-based",
      details: {
        fullDescription: "This book was written to help children in their character development. They would learn the joy of kindness, obedience, honesty, and maintain a healthy self-image.\n\n\"You can do all things through Christ who strengthens you.\"",
        publisher: "Covenant Books, Inc.",
        publishDate: "April 12, 2021",
        format: "Available in paperback and eBook",
        pages: 58,
        dimensions: "229 x 152 x 4 mm (9 x 6 x 0.16 inches)",
        weight: "Approximately 118 g",
        isbn_paperback: "9781636304533",
        isbn_ebook: "9781636304540",
        features: [
          "Character Development Focus: Teaches children the values of kindness, obedience, honesty, and maintaining a healthy self-image.",
          "Inspirational Message: Emphasizes the empowering belief: \"You can do all things through Christ who strengthens you.\"",
          "Faith-Based Content: Integrates Christian principles to support moral and spiritual growth.",
          "Child-Friendly Format: Designed for young readers with accessible language and length.",
          "Digital Accessibility: Available as an eBook with features like read-aloud and offline access for flexible reading options."
        ]
      },
      comingSoon: false,
      amazonLink: "https://www.amazon.com/Love-Children-Joan-Calliste-ebook/dp/B096NKG9DS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xQDWPdvVJrqP8lnWxotWvA.4E5sabOre79CK9JG3xriB77YCTzUvv-bqCpvlQTu08A&dib_tag=se&qid=1747693172&refinements=p_27%3AJoan+E+Calliste&s=books&sr=1-1&text=Joan+E+Calliste"
    },
    {
      id: 2,
      title: "The Second Adventure",
      coverImage: bookCover2,
      modalImage: bookFrontImage2,
      description: "A new journey of faith and discovery coming soon.",
      ageRange: "6-10",
      category: "faith-based",
      comingSoon: true, // Flag to indicate this is a coming soon book
      releaseDate: "Fall 2025", // Expected release date
      details: {
        fullDescription: "We're excited to announce our upcoming title that will take children on another faith-filled adventure. Stay tuned for more information as we get closer to the release date."
      }
    }
  ];

  const [selectedBook, setSelectedBook] = useState(null);
  const fallElementsContainerRef = useRef(null);

  // Open book detail modal with the selected book
  const openBookDetail = (book) => {
    setSelectedBook(book);
    document.body.style.overflow = 'hidden';
  };

  // Close book detail modal
  const closeBookDetail = () => {
    setSelectedBook(null);
    document.body.style.overflow = 'auto';
  };

  // Add falling leaves and flowers effect
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

  return (
    <>
      <Header />
      <BooksContainer>
        <FallingLeavesContainer ref={fallElementsContainerRef} />
        
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Books
        </PageTitle>
        
        {/* Books display container */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          padding: '20px 0'
        }}>
          {/* First Book */}
          <motion.div
            style={{
              width: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem 0',
              minHeight: '50vh'
            }}
          >
            <motion.img 
              src={booksData[0].coverImage}
              alt={booksData[0].title}
              onClick={() => openBookDetail(booksData[0])}
              style={{
                width: '320px', 
                maxWidth: '90%', 
                height: 'auto',
                borderRadius: '12px', 
                boxShadow: '0 25px 40px rgba(0, 0, 0, 0.35)', 
                transform: 'rotate(-3deg)',
                transformStyle: 'preserve-3d',
                cursor: 'pointer'
              }}
              whileHover={{ 
                y: -20, 
                rotate: 0, 
                scale: 1.08,
                filter: 'drop-shadow(0 30px 40px rgba(0, 0, 0, 0.45))'
              }}
              initial={{ 
                opacity: 0, 
                y: 30,
                rotate: -3 
              }}
              animate={{ 
                opacity: 1,
                y: [0, -12, 0],
                rotate: -3,
                transition: {
                  opacity: { duration: 0.5 },
                  y: { 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  },
                  rotate: { duration: 0.5 }
                }
              }}
              whileTap={{ scale: 0.97 }}
            />
          </motion.div>

          {/* Second Book (Coming Soon) */}
          <motion.div
            style={{
              width: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem 0',
              minHeight: '50vh',
              position: 'relative'
            }}
          >
            {/* Using a wrapper to keep the "Coming Soon" banner attached to the book during animations */}
            <motion.div
              style={{ position: 'relative' }}
              whileHover={{ 
                y: -20, 
                rotate: 0, 
                scale: 1.08,
                filter: 'drop-shadow(0 30px 40px rgba(0, 0, 0, 0.45))'
              }}
              initial={{ 
                opacity: 0, 
                y: 30,
                rotate: 3 
              }}
              animate={{ 
                opacity: 1,
                y: [0, -10, 0],
                rotate: 3,
                transition: {
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: { 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  },
                  rotate: { duration: 0.5 }
                }
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Coming Soon banner - repositioned and resized */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '2%', // Higher position to ensure it stays within the book top
                  left: '50%', // Center horizontally
                  transform: 'translateX(-50%)', // Center align
                  background: '#FF6B6B',
                  color: 'white',
                  padding: '3px 12px', // Adjusted padding
                  borderRadius: '4px', // Smaller, even border radius
                  fontFamily: 'Comic Sans MS, cursive',
                  fontSize: '0.7rem', // Even smaller font to fit better
                  fontWeight: 'bold',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                  zIndex: 2,
                  textAlign: 'center',
                  pointerEvents: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3px',
                  minWidth: '80px', // Ensure a minimum width
                  width: 'auto', // Let it adjust to content
                  maxWidth: '60%', // Don't let it get too wide
                }}
              >
                Coming Soon
              </motion.div>
              
              {/* Book image inside the same wrapper - updated size to match first book */}
              <motion.img 
                src={booksData[1].coverImage}
                alt={booksData[1].title}
                onClick={() => openBookDetail(booksData[1])}
                style={{
                  width: '320px', // Same width as first book
                  maxWidth: '90%', 
                  height: 'auto',
                  borderRadius: '12px', // Same border radius
                  boxShadow: '0 25px 40px rgba(0, 0, 0, 0.35)', // Same shadow
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d', // Added to match first book
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Book Detail Modal */}
        <AnimatePresence>
          {selectedBook && (
            <BookDetailModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBookDetail}
            >
              <ModalContent
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ModalHeader>
                  <h2>{selectedBook.title}</h2>
                  <CloseButton onClick={closeBookDetail}>×</CloseButton>
                </ModalHeader>
                <ModalBody>
                  <ModalImageContainer>
                    <img src={selectedBook.modalImage} alt={selectedBook.title} />
                  </ModalImageContainer>
                  <ModalInfo>
                    {/* Content depends on whether it's a coming soon book or not */}
                    {selectedBook.comingSoon ? (
                      // Coming Soon Content
                      <>
                        <motion.h3
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          style={{ fontSize: '1.8rem', color: '#FF6B6B', marginBottom: '1.5rem' }}
                        >
                          Coming Soon!
                        </motion.h3>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {selectedBook.details.fullDescription}
                        </motion.p>
                        
                        {selectedBook.releaseDate && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            style={{
                              marginTop: '2rem',
                              padding: '1rem 1.5rem',
                              borderRadius: '10px',
                              background: 'rgba(74, 144, 226, 0.1)',
                              display: 'inline-block'
                            }}
                          >
                            <h4 style={{ margin: '0 0 0.5rem', color: '#4A90E2' }}>Expected Release:</h4>
                            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}>
                              {selectedBook.releaseDate}
                            </p>
                          </motion.div>
                        )}
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                          style={{ marginTop: '2rem' }}
                        >
                          <p>
                            Want to be notified when this book becomes available? 
                            Subscribe to our newsletter to receive updates.
                          </p>
                        </motion.div>
                      </>
                    ) : (
                      // Regular Book Content
                      <>
                        <h3>About This Book</h3>
                        <p>{selectedBook.details.fullDescription.split('\n\n').map((paragraph, i) => 
                          paragraph.includes('"') ? 
                            <em key={i} style={{display: 'block', marginTop: '1rem', fontStyle: 'italic'}}>{paragraph}</em> : 
                            <span key={i}>{paragraph}</span>
                        )}</p>
                        
                        <h3>Book Details</h3>
                        <ul>
                          <li><strong>Publisher:</strong> {selectedBook.details.publisher}</li>
                          <li><strong>Publication Date:</strong> {selectedBook.details.publishDate}</li>
                          <li><strong>Format:</strong> {selectedBook.details.format}</li>
                          <li><strong>Age Range:</strong> {selectedBook.ageRange} years (eBook)</li>
                          <li><strong>Pages:</strong> {selectedBook.details.pages}</li>
                          <li><strong>Dimensions:</strong> {selectedBook.details.dimensions}</li>
                          <li><strong>Weight:</strong> {selectedBook.details.weight}</li>
                          <li><strong>ISBN (Paperback):</strong> {selectedBook.details.isbn_paperback}</li>
                          <li><strong>ISBN (eBook):</strong> {selectedBook.details.isbn_ebook}</li>
                        </ul>
                        
                        <h3>Special Features</h3>
                        <ul>
                          {selectedBook.details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        
                        <BuyButton 
                          href={selectedBook.amazonLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Purchase on Amazon
                        </BuyButton>
                      </>
                    )}
                  </ModalInfo>
                </ModalBody>
              </ModalContent>
            </BookDetailModal>
          )}
        </AnimatePresence>
        
      </BooksContainer>
      <Footer />
    </>
  );
};

export default Books;