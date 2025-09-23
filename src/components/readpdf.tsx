import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// This is a necessary setting for react-pdf to work correctly
pdfjs.GlobalWorkerOptions.workerSrc = ``;

// Main App Component
export default function App() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  // You can replace this URL with the URL of your PDF file
  const pdfUrl = "https://img1.wsimg.com/blobby/go/2e6a68d7-eb25-431a-acb5-b2387b3e18f2/nice8%5B1%5D.pdf";
  
  // Function called when the PDF document is loaded successfully
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  // Go to the previous page
  function goToPrevPage() {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  }

  // Go to the next page
  function goToNextPage() {
    if (numPages) {
      setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <title>PDF Viewer</title>

      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          عــارض الــمــلــفــات الــمــتــعــددة
        </h1>
        
        {/* Loading and Error Handling */}
        <div className="text-center mb-4 text-gray-600 h-8">
          {loading ? (
            <p>جارِ تحميل المستند...</p>
          ) : (
            <p>
              الصفحة {pageNumber} من {numPages}
            </p>
          )}
        </div>

        {/* The PDF Document Container */}
        <div className="relative w-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-inner">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            className="w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={pageNumber}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center"
              >
                <Page 
                  pageNumber={pageNumber} 
                  width={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </Document>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className={`
              p-2 rounded-full transition-all duration-200 shadow-md
              ${pageNumber <= 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
              }
            `}
          >
            <ChevronLeft size={24} />
          </button>
          
          <span className="text-lg font-medium text-gray-700">
            {pageNumber} / {numPages || '-'}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 0)}
            className={`
              p-2 rounded-full transition-all duration-200 shadow-md
              ${pageNumber >= (numPages || 0)
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
              }
            `}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
