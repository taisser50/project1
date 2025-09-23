import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// خصائص التحريك للفوتر
const footerVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.8,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// بناء المكونات باستخدام Styled Components
const StyledFooter = styled(motion.footer)`
  /* استخدام position: sticky */
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  
  /* خصائص التصميم */
  padding: 1rem 0; 
  background: rgba(255, 255, 255, 0.1); 
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  
  color: #fff;
  text-align: center;
`;

const FooterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 1rem;
`;

const FooterSection = styled(motion.div)`
  flex: 1 1 250px;
  margin: 1rem;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: #fff;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  a {
    color: #c0c0c0;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #764ba2;
    }
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const SocialIcon = styled(motion.img)`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const FooterBottom = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  margin-top: 0.5rem;
`;

// دمج المكونات المصممة
const Footer = () => {
  return (
    <StyledFooter
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <FooterContainer>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact us</h3>
          <p>Email: <a href="mailto:infoADT@ADT.Technology.com">infoADT@ADT.Technology.com</a></p>
          <p>Phone: +123 456 7890</p>
        </FooterSection>

        <FooterSection>
          <h3>Follow us</h3>
          <SocialIconsContainer>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <SocialIcon src={'/images/facebook.png'} alt="Facebook" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <SocialIcon src={'/images/linkedin.png'} alt="LinkedIn" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <SocialIcon src={'/images/instagram.png'} alt="Instagram" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <SocialIcon src={'/images/youtube.png'} alt="YouTube" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
              <SocialIcon src={'/images/tik-tok.png'} alt="TikTok" />
            </motion.a>
          </SocialIconsContainer>
        </FooterSection>
      </FooterContainer>
      <FooterBottom>
        © 2025 ADT Technology Solutions Powered by ADT Company.
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;