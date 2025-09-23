import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const StyledSection = styled(motion.section)`
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem;
   border-radius: 1rem;
  background: linear-gradient(135deg, #f0f4f8 0%, #203d5eff 100%);
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
  gap: 2rem;
  text-align: center;
`;


const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const StyledH1 = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #000000ff;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
`;

const StyledH2 = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 600;
  color: #013a63;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 10;
`;

const StyledP = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #4a5568;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
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
  children: React.ReactNode;
}

const TextSection: React.FC<TextSectionProps> = ({ title, subtitle, children }) => {
  return (
    <StyledSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <ContentContainer
        variants={staggerVariants}
      >
        <HeaderContainer>
          <StyledH1 variants={textVariants}>
            {title}
          </StyledH1>
          <StyledH2 variants={textVariants}>
            {subtitle}
          </StyledH2>
        </HeaderContainer>

        {children}
      </ContentContainer>
    </StyledSection>
  );
};

export default TextSection;