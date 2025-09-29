import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; // أيقونة سهم للأعلى

interface BackToTopButtonProps {
  threshold?: number; // المسافة من الأعلى لإظهار الزر
  size?: number;      // حجم الزر
  bgColor?: string;   // لون الخلفية
  iconColor?: string; // لون السهم
}

export default function BackToTopButton({
  threshold = 300,
  size = 50,
  bgColor = "#2563eb", // أزرق Tailwind
  iconColor = "#ffffff",
}: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          style={{
            width: size,
            height: size,
            backgroundColor: bgColor,
            color: iconColor,
          }}
          className="fixed bottom-6 right-6 rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-110 transition-transform cursor-pointer"
          aria-label="Back to top"
        >
          <FaArrowUp size={size * 0.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
