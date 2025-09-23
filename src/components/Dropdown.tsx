// src/components/Dropdown.tsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, To } from 'react-router-dom';

// تعريف متحركات (variants) القائمة المنسدلة
const dropdownVariants = {
  // زيادة الشفافية (opacity) عند الفتح
  open: { opacity: 0.9, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface DropdownItem {
  link: To;
  label: React.ReactNode;
}

interface DropdownProps {
  variants: any; // Keep this as 'any' if specific Framer Motion variants type is causing issues
  items: DropdownItem[];
}

function Dropdown({ variants, items }: DropdownProps) {
 const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // دالة تُشغل عند بداية المرور فوق العنصر
  const handleHoverStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  // دالة تُشغل عند نهاية المرور فوق العنصر، مع مؤقت
  const handleHoverEnd = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 1000); // 3000 مللي ثانية = 3 ثواني
  };

  return (
    <motion.div
      variants={variants}
      className="relative"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <span className="cursor-pointer">
        More
      </span>

      {isOpen && (
        <motion.ul
          initial="closed"
          animate="open"
          exit="closed" // لإنشاء تأثير إغلاق سلس
          variants={dropdownVariants}
          // إضافة max-h-[180px] و overflow-y-auto
          // (5 عناصر * تقريباً 36px ارتفاع لكل عنصر)
          className="absolute top-[100%] mt-[10px] w-[200px] bg-white shadow-lg rounded-md p-2 z-20 max-h-[180px] overflow-y-auto"
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={dropdownVariants} // يمكنك استخدام variants لهذا العنصر أيضًا إذا أردت
              className="py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <Link to={item.link} className="block w-full h-full text-black no-underline">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

export default Dropdown;