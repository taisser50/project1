import React, { useState, useEffect } from 'react';
import FileViewer from 'react-file-viewer';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ViewerContainer = styled(motion.div)`
  width: 95%;
  max-width: 800px; /* أقصى عرض للشاشات الكبيرة */
  margin: 2rem auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PDFHeader = styled.div`
  background-color: #013a63;
  color: #fff;
  padding: clamp(1rem, 2vw, 1.5rem);
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
`;

const FileWrapper = styled.div`
  position: relative;
  height: clamp(400px, 60vh, 700px); /* ارتفاع متغير حسب حجم الشاشة */
  background-color: #f0f4f8;

  @media (max-width: 480px) {
    height: 50vh; /* شاشات صغيرة */
  }
`;

const StatusMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #555;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  z-index: 10;
  text-align: center;
`;

const ErrorMessage = styled(StatusMessage)`
  color: #c90000;
  border: 1px solid #c90000;
  padding: 1rem 2rem;
  background-color: #fcebeb;
  border-radius: 10px;
`;

const ControlsContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: clamp(0.8rem, 1.5vw, 1.5rem);
  background-color: #e2e8f0;
  border-top: 1px solid #d1d5db;
`;

const ControlButton = styled(motion.a)`
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  color: #fff;
  background-color: #013a63;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f9c;
  }
`;

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  const handleError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return (
    <ViewerContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PDFHeader>{title}</PDFHeader>

      <FileWrapper>
        {isLoading && !isError && <StatusMessage>Downloading..</StatusMessage>}
        {isError && <ErrorMessage>Something went wrong. Try again.</ErrorMessage>}

        {!isError && (
          <FileViewer
            fileType="pdf"
            filePath={pdfUrl}
            onError={handleError}
          />
        )}
      </FileWrapper>

      <ControlsContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ControlButton
          href={pdfUrl}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download
        </ControlButton>
      </ControlsContainer>
    </ViewerContainer>
  );
};

export default PDFViewer;
