import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';

// **الإعداد الأساسي لـ pdf.js worker:**
// هذا ضروري ليعمل العرض بشكل صحيح
pdfjs.GlobalWorkerOptions.workerSrc = `/workers/pdf.worker.min.js`;

// -------------------------------------------------------------------
// Styled Components
// -------------------------------------------------------------------

const ViewerContainer = styled(motion.div)`
  width: 95%;
  max-width: 800px;
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
  /* جعل ارتفاع الملف مناسباً للعرض مع شريط تمرير داخلي */
  height: clamp(400px, 60vh, 700px); 
  background-color: #f0f4f8;
  /* هذا مهم جداً: لتمكين تمرير محتوى المستند */
  overflow-y: auto; 

  @media (max-width: 480px) {
    height: 50vh;
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

// -------------------------------------------------------------------
// Component Interface and Implementation
// -------------------------------------------------------------------

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer1: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [isError, setIsError] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);

  // تم إزالة isLoading و setTimeout
  // سنعتمد على onLoadSuccess و onLoadError من <Document>

  const handleError = (error: any) => {
    console.error("PDF Loading Error:", error);
    setIsError(true);
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsError(false); // مسح أي خطأ سابق
  }

  return (
    <ViewerContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PDFHeader>{title}</PDFHeader>

      <FileWrapper>
        {isError && <ErrorMessage>Something went wrong while loading the PDF. Try again.</ErrorMessage>}

        {!isError && (
          <Document
            file={pdfUrl} // استخدام 'file' بدلاً من 'filePath'
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={handleError}
            // رسالة تحميل تظهر أثناء جلب المستند
            loading={<StatusMessage>Downloading and preparing document...</StatusMessage>}
            
          >
            {/* عرض جميع الصفحات التي تم تحميلها */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                // إضافة 'key' فريد لكل صفحة (يحفظك من تحذير key)
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                // تعيين عرض ثابت هنا يضمن حجم ثابت داخل الحاوية 
                width={800} 
              />
            ))}
          </Document>
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

export default PDFViewer1;