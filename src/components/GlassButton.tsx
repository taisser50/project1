import { motion } from "framer-motion";

type SizeType = "sm" | "md" | "lg";


interface GlassButtonProps {
  text?: string;
  size?: SizeType;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function GlassButton({
  text = "Click Me",
  size = "md",
  onClick,
  className = "",
  type,
}: GlassButtonProps) {
  const sizes: Record<SizeType, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-8 py-2 text-base",
    lg: "px-15 py-3 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 30px rgba(137, 194, 217, 0.7)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative rounded-xl border border-white/30 
        text-white font-semibold 
        shadow-md backdrop-blur-md overflow-hidden
        transition-all duration-300
        ${sizes[size]} ${className}
      `}
      type={type}
    >
      {/* خلفية التدرج المتحرك */} 
      <div
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "linear-gradient(135deg, #012a4a, #013a63, #01497c, #014f86, #2a6f97, #2c7da0, #468faf, #61a5c2, #89c2d9, #a9d6e5)",
          backgroundSize: "300% 300%",
          animation: "gradientMove 6s ease infinite",
        }}
      />

      {/* توهج خارجي دائم يعطي إحساس بالنبض */}
      <div
        className="absolute inset-0 -z-20 rounded-xl blur-2xl opacity-50 animate-glow"
        style={{
          background:
            "linear-gradient(135deg, #012a4a, #013a63, #01497c, #014f86, #2a6f97, #2c7da0, #468faf, #61a5c2, #89c2d9, #a9d6e5)",
        }}
      />

      {/* لمعة زجاجية خفيفة */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-xl blur-sm -z-10" />

      {text}

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glowPulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }

        .animate-glow {
          animation: glowPulse 4s ease-in-out infinite;
        }
      `}</style>
    </motion.button>
  );
}

export default GlassButton;
