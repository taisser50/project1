import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableSectionProps {
  previewText: string;               
  children: React.ReactNode;        
  buttonLabels?: { more: string; less: string };
  className?: string;               
  buttonClassName?: string;          
  contentClassName?: string;        
}

export default function ExpandableSection({
  previewText,
  children,
  buttonLabels = { more: "Learn more", less: "Learn less" },
  className = "",
  buttonClassName = "",
  contentClassName = "",
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`flex flex-col gap-2 ${className}`}
    >
      {/* النص المختصر */}
      <p className="text-gray-700">{previewText}</p>

      {/* زر التبديل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-medium text-black hover:text-blue-800 ${buttonClassName}`}
      >
        <motion.span
          layout
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block text-xl font-bold"
        >
          +
        </motion.span>
        {isOpen ? buttonLabels.less : buttonLabels.more}
      </button>

      {/* المحتوى المرن */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="extra"
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`overflow-hidden p-4 bg-none text-bold border-2 border-black rounded-xl shadow-sm space-y-3 ${contentClassName}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
