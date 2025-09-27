import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled(motion.section)`
  position: relative;
  overflow: hidden;
  padding: clamp(3rem, 8vw, 8rem) 2rem; /* padding متجاوب */
  border-radius: 1rem;

  background: rgba(255, 255, 255, 0.1); 
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  color: #1a202c;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 60%);
    pointer-events: none;
  }
`;

const ContentContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 2rem);
  text-align: center;
  padding: 0 1rem;
`;

const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledH1 = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.5rem); 
  font-weight: 700;
  color: #000;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
   font-family: 'IBM Plex Sans', 'monospace'
`;

const StyledH2 = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 600;
  color: #013a63;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
   font-family:'IBM Plex Sans', 'sans-serif';

`;

const StyledP = styled(motion.p)`
  font-size: clamp(0.9rem, 2.5vw, 1.15rem);
  line-height: 1.8;
  color: #4a5568;
  max-width: 90%; 
  margin: 0 auto;
  position: relative;
  z-index: 10;
    font-family: 'Inter', 'sans-serif';
`;

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const staggerVariants = {
  visible: { 
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface TextSectionProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const TextSection: React.FC<TextSectionProps> = ({ title, subtitle, children }) => {
  return (
    <StyledSection
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: window.innerWidth < 768 ? 0.1 : 0.2 }}
    >
      <ContentContainer variants={staggerVariants}>
        <HeaderContainer>
          <StyledH1 variants={textVariants}>{title}</StyledH1>
          <StyledH2 variants={textVariants}>{subtitle}</StyledH2>
        </HeaderContainer>

        {children && React.Children.map(children, (child) =>
          <StyledP variants={textVariants}>{child}</StyledP>
        )}
      </ContentContainer>
    </StyledSection>
  );
};

export default TextSection;
