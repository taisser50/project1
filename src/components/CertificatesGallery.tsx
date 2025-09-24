import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageContainer from "./PageContainer";

const images = [
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert.jpg",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert1.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert3.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert4.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert5.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert6.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert7.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert8.png",
  "/images/ourwork/fireAlarm/Certificates and licenses/Cert9.png",
];

function CertificatesGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <PageContainer>
      <h1 className="text-2xl font-bold mb-6">Certificates</h1>

      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Certificate ${idx}`}
            className="cursor-pointer rounded-lg shadow-lg object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

    
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)} // اغلاق عند الضغط خارج الصورة
          >
            <motion.img
              src={selectedImg}
              alt="Selected Certificate"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // منع اغلاق عند الضغط على الصورة نفسها
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}

export default CertificatesGallery;
