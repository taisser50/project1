import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Variants للتحريك
const footerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Styled Footer
const StyledFooter = styled(motion.footer)`
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #fff;
  text-align: center;

  position: relative;

  @media(min-width: 1024px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1.5rem;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const FooterSection = styled.div`
  flex: 0 1 250px;
  margin: 0.5rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4e74a3ff;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #314881ff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #764ba2;
    }
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;

    @media(max-width: 768px) {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const SocialIcon = styled(motion.img)`
  width: 35px;
  height: 35px;
  cursor: pointer;

  @media(max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const FooterBottom = styled.p`
  font-size: 14px;
  color: #313030ff;
  margin-top: 0.5rem;

  @media(max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer: React.FC = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);

    let scrollListener: (() => void) | undefined;

    if (isDesktop) {
      scrollListener = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
        setShowFooter(isAtBottom);
      };
      window.addEventListener('scroll', scrollListener);
    } else {
      setShowFooter(true); // Mobile: دائمًا ظاهر
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollListener) window.removeEventListener('scroll', scrollListener);
    };
  }, [isDesktop]);

  return (
    <AnimatePresence>
      {showFooter && (
        <StyledFooter
          variants={footerVariants}
          initial={isDesktop ? "hidden" : "visible"} // Mobile يظهر مباشرة بدون animation
          animate="visible"
          exit="hidden"
        >
          <FooterContainer>
            <FooterSection>
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutCo">About</Link></li>
                <li><Link to="/OurSolutions">Solutions</Link></li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h3>Contact us</h3>
              <p><a href="mailto:infoADT@ADT.Technology.com">infoADT@ADT.Technology.com</a></p>
              <p>+123 456 7890</p>
            </FooterSection>

            <FooterSection>
              <h3>Follow us</h3>
              <SocialIconsContainer>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
                  <SocialIcon src="/images/facebook.png" alt="Facebook" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
                  <SocialIcon src="/images/linkedin.png" alt="LinkedIn" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
                  <SocialIcon src="/images/instagram.png" alt="Instagram" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
                  <SocialIcon src="/images/youtube.png" alt="YouTube" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -5 }}>
                  <SocialIcon src="/images/tik-tok.png" alt="TikTok" />
                </motion.a>
              </SocialIconsContainer>
            </FooterSection>
          </FooterContainer>

          <FooterBottom>
            © 2025 ADT Technology Solutions Powered by ADT Company.
          </FooterBottom>
        </StyledFooter>
      )}
    </AnimatePresence>
  );
};

export default Footer;
