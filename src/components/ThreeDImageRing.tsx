import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

export interface MarqueeImage {
  src: string;
  alt: string;
}

export interface ThreeDMarqueeProps {
  images: MarqueeImage[];
  className?: string;
  cols?: number;
  baseRotateX?: number;
  baseRotateY?: number;
  baseRotateZ?: number;
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  images,
  className = "",
  cols = 4,
  baseRotateX = 55,
  baseRotateY = 0,
  baseRotateZ = 45,
}) => {
  const duplicatedImages = [...images, ...images];
  const groupSize = Math.ceil(duplicatedImages.length / cols);
  const imageGroups = Array.from({ length: cols }, (_, index) =>
    duplicatedImages.slice(index * groupSize, (index + 1) * groupSize)
  );

  const [modalImage, setModalImage] = useState<MarqueeImage | null>(null);
  const [rotation, setRotation] = useState({ rotateX: baseRotateX, rotateY: baseRotateY });

  // Hover effect dynamic rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to +10 deg
    const y = -(e.clientY / innerHeight - 0.5) * 20; // -10 to +10 deg
    setRotation({ rotateX: baseRotateX + y, rotateY: baseRotateY + x });
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ rotateX: baseRotateX, rotateY: baseRotateY });
  };

  return (
    <section
      className={`mx-auto block h-[600px] max-sm:h-[400px] overflow-hidden rounded-2xl 
        bg-gradient-to-r from-[#f0f4f8] to-[#203d5eff] dark:bg-black border-1 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1500 }}
    >
      <div
        className="flex w-full h-full items-center justify-center"
        style={{
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) rotateZ(${baseRotateZ}deg)`,
        }}
      >
        <div className="w-full overflow-hidden scale-90 sm:scale-100">
          <div
            className={`relative grid h-full w-full origin-center 
              grid-cols-2 sm:grid-cols-${Math.min(cols, 3)} md:grid-cols-${cols} gap-4 transform`}
          >
            {imageGroups.map((imagesInGroup, idx) => {
              // Generate random speed for each column
              const speed = 8 + Math.random() * 8;

              return (
                <motion.div
                  key={`column-${idx}`}
                  animate={{ y: idx % 2 === 0 ? 120 : -120 }}
                  transition={{
                    duration: speed,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-6 relative"
                >
                  {imagesInGroup.map((image, imgIdx) => (
                    <div key={`img-${imgIdx}`} className="relative">
                      <motion.img
                        whileHover={{ y: -10, scale: 1.05, rotateX: 5, rotateY: 5 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        src={image.src}
                        alt={image.alt}
                        className="aspect-[970/700] w-full max-w-[200px] rounded-lg object-cover
                          ring ring-gray-300/20 dark:ring-gray-800/30 shadow-lg hover:shadow-2xl transition-all duration-300
                          cursor-pointer"
                        onClick={() => setModalImage(image)}
                      />
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage.src}
              alt={modalImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
