import { motion  } from "framer-motion";
import { useState } from "react";
import GlassButton from "./GlassButton";

interface ProductCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
   textArea?: string;

}




export default function ProductCard({ imageSrc, alt, title, description, textArea }: ProductCardProps) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform({ rotateX: -rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      {/* الكارت مع الصورة */}
      <motion.div
        className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: "transform 0.2s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-center text-white p-4"
          initial={{ opacity: 0, y: 50 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-sm">{description}</p>
        </motion.div>
      </motion.div>

      {/* النصوص الجانبية */}
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} // 👈 تتكرر مع كل scroll
      >
        <h1 className="text-center md:text-left font-bold text-blue-500 text-2xl md:text-3xl">
          {title}
        </h1>
        <p className="text-gray-600">
          {textArea}
        </p>
       
      </motion.div>
    </div>
  );
}