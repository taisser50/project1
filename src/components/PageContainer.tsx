import React from "react";
import { motion } from "framer-motion";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <motion.div
      className="pt-[clamp(5rem,10vw,8rem)] px-[clamp(1rem,5vw,2.5rem)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="w-[95%] max-w-[1200px] mx-auto bg-gradient-to-r from-[#f0f4f8] to-[#203d5eff] shadow-lg rounded-2xl p-[clamp(1.5rem,2.5vw,2.5rem)]"
        style={{
          minHeight: "clamp(400px, 70vh, 900px)", // ارتفاع ديناميكي
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default PageContainer;
