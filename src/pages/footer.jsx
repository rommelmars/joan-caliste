import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import Modal from '../pages/modal.jsx';

import {
  FooterContainer,
  FooterContent,
  SocialIcons,
  SocialIcon,
  Copyright,
  FooterLink,
  FooterLogo
} from '../styles/FooterStyles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterLogo>Joan E. Calliste Publication</FooterLogo>
          
          <SocialIcons>
            <SocialIcon 
              href="https://www.instagram.com/joan.e.calliste/" 
              target="_blank" 
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
          </SocialIcons>
          
          <Copyright>
            &copy; {currentYear} Joan E. Calliste Publication. All rights reserved.
          </Copyright>
          
          <div>
            <FooterLink 
              as="button"
              whileHover={{ scale: 1.05 }}
              onClick={() => setPrivacyModalOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: "'Comic Sans MS', cursive",
                color: '#4A90E2'
              }}
            >
              Privacy Policy
            </FooterLink>
            {' | '}
            <FooterLink 
              as="button"
              whileHover={{ scale: 1.05 }}
              onClick={() => setTermsModalOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: "'Comic Sans MS', cursive",
                color: '#4A90E2'
              }}
            >
              Terms of Service
            </FooterLink>
          </div>
        </FooterContent>
      </FooterContainer>

      {/* Privacy Policy Modal */}
      <Modal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <div style={{ lineHeight: '1.6', color: '#333' }}>
          <h4>Last Updated: May 20, 2025</h4>
          <p>
            Welcome to Joan E. Calliste Publication's Privacy Policy. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website.
          </p>
          
          <h3>INFORMATION WE COLLECT</h3>
          <p>
            We may collect information about you in various ways. The information we collect may include:
          </p>
          <ul>
            <li>Personal Data: Name, email address, and similar contact information.</li>
            <li>Usage Data: Information about how you use our website and which pages you visit.</li>
            <li>Cookies Data: We use cookies to enhance your browsing experience.</li>
          </ul>
          
          <h3>HOW WE USE YOUR INFORMATION</h3>
          <p>
            We may use the information we collect from you to:
          </p>
          <ul>
            <li>Provide and maintain our website</li>
            <li>Notify you about changes to our website</li>
            <li>Respond to your inquiries</li>
            <li>Send newsletters (with your consent)</li>
            <li>Improve our website experience</li>
          </ul>
          
          <h3>CHILDREN'S PRIVACY</h3>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
          
          <h3>CHANGES TO THIS PRIVACY POLICY</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          
          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            Website designed and developed by Sea Amos Business Solutions.
          </p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal 
        isOpen={termsModalOpen} 
        onClose={() => setTermsModalOpen(false)}
        title="Terms of Service"
      >
        <div style={{ lineHeight: '1.6', color: '#333' }}>
          <h4>Last Updated: May 20, 2025</h4>
          <p>
            Please read these Terms of Service carefully before using the Joan E. Calliste Publication website.
          </p>
          
          <h3>1. ACCEPTANCE OF TERMS</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms of Service.
          </p>
          
          <h3>2. COPYRIGHT AND INTELLECTUAL PROPERTY</h3>
          <p>
            All content on this website, including text, images, graphics, and illustrations, is the property of Joan E. Calliste Publication
            and protected by copyright laws. The content may not be copied, reproduced, or distributed without prior written permission.
          </p>
          
          <h3>3. USER CONDUCT</h3>
          <p>
            You agree not to use our website for any unlawful purpose or in any way that might harm, disable, or impair the website.
          </p>
          
          <h3>4. DISCLAIMER</h3>
          <p>
            The materials on this website are provided "as is" without warranties of any kind, either express or implied.
            Joan E. Calliste Publication does not warrant that the website will be error-free or uninterrupted.
          </p>
          
          <h3>5. LIMITATION OF LIABILITY</h3>
          <p>
            Joan E. Calliste Publication shall not be liable for any damages arising from the use or inability to use the materials
            on this website.
          </p>
          
          <h3>6. CHANGES TO TERMS</h3>
          <p>
            We reserve the right to modify these Terms of Service at any time. By continuing to use our website after such changes,
            you agree to be bound by the revised terms.
          </p>
          
          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            Website designed and developed by Sea Amos Business Solutions.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;