import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faBookOpen, 
  faCommentDots,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import Header from './header';
import Footer from './footer';
import bookImage from '../image/book1.png';
import leafImage from '../image/leaves.png';

import {
  ContactContainer,
  PageTitle,
  ContactContent,
  ContactIntro,
  ContactFormContainer,
  StyledForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  FormMessage,
  DecorationLeft,
  DecorationRight,
  LoadingSpinner
} from '../styles/ContactStyles';

import { FallingLeavesContainer } from '../styles/HomeStyles';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });
  
  const formRef = useRef();
  const fallElementsContainerRef = useRef(null);
  
  // Same falling leaves effect code...
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
        createFallingElement(bookImage, 'flower');
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
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  // Simple handler that opens user's email client
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid()) return;
    
    setFormStatus({
      loading: true,
      submitted: true,
      message: 'Opening your email client...'
    });
    
    // Create email subject and body
    const emailSubject = formState.subject || `Message from ${formState.name} via website`;
    const emailBody = `
Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:spicyjoan@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setFormStatus({
        loading: false,
        submitted: true,
        success: true,
        message: 'Email client opened! Please send the email to contact Joan directly.'
      });
      
      // Clear form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear message after 8 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
          loading: false
        });
      }, 8000);
    }, 1000);
  };
  
  const isFormValid = () => {
    return (
      formState.name.trim() !== '' && 
      formState.email.trim() !== '' && 
      formState.message.trim() !== ''
    );
  };

  return (
    <>
      <Header />
      <ContactContainer>
        <FallingLeavesContainer ref={fallElementsContainerRef} />
        
        <DecorationLeft 
          src={bookImage}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1 }}
        />
        
        <DecorationRight 
          src={leafImage}
          alt=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1 }}
        />
        
        <PageTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Joan
        </PageTitle>
        
        <ContactContent>
          <ContactIntro
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Send a Message to Joan!</h2>
            <p>
              Have questions about Joan's books? Want to request a school visit or reading? 
              Fill out the form below to contact Joan directly through email!
            </p>
          </ContactIntro>
          
          <ContactFormContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StyledForm ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>
                  <FontAwesomeIcon icon={faUser} />
                  Your Name <span>*</span>
                </FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Your Email <span>*</span>
                </FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>
                  <FontAwesomeIcon icon={faBookOpen} />
                  Subject
                </FormLabel>
                <FormInput
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="What are you writing about?"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>
                  <FontAwesomeIcon icon={faCommentDots} />
                  Message <span>*</span>
                </FormLabel>
                <FormTextarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                />
              </FormGroup>
              
              <SubmitButton 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!isFormValid()}
              >
                <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
                Send Message
                {formStatus.loading && <LoadingSpinner />}
              </SubmitButton>
            </StyledForm>
            
            <AnimatePresence>
              {formStatus.submitted && (
                <FormMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={formStatus.success ? 'success' : 'error'}
                >
                  {formStatus.message}
                </FormMessage>
              )}
            </AnimatePresence>
          </ContactFormContainer>
        </ContactContent>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;