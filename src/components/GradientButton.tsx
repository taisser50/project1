import React from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  size?: "small" | "medium" | "large" | "xl";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  href,
  target = "_self",
  size = "medium",
  variant = "primary",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const variants = {
    primary: {
      initial: {
        scale: 1,
        background: "linear-gradient(135deg, #012a4a 0%, #2a6f97 100%)",
      },
      hover: {
        scale: 1.05,
        background: "linear-gradient(135deg, #2a6f97 0%, #012a4a 100%)",
        boxShadow: "0 10px 30px rgba(1, 42, 74, 0.4)",
        transition: { duration: 0.3 },
      },
      tap: { scale: 0.95 },
    },
    secondary: {
      initial: {
        scale: 1,
        background: "linear-gradient(135deg, #468faf 0%, #89c2d9 100%)",
      },
      hover: {
        scale: 1.05,
        background: "linear-gradient(135deg, #89c2d9 0%, #468faf 100%)",
        boxShadow: "0 10px 30px rgba(70, 143, 175, 0.4)",
        transition: { duration: 0.3 },
      },
      tap: { scale: 0.95 },
    },
    outline: {
      initial: {
        scale: 1,
        background: "transparent",
        border: "2px solid #012a4a",
        color: "#012a4a",
      },
      hover: {
        scale: 1.05,
        background: "linear-gradient(135deg, #012a4a 0%, #2a6f97 100%)",
        color: "#ffffff",
        boxShadow: "0 10px 30px rgba(1, 42, 74, 0.3)",
        transition: { duration: 0.3 },
      },
      tap: { scale: 0.95 },
    },
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const buttonVariants = variants[variant];

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-xl 
    shadow-lg transition-all duration-300 relative overflow-hidden
    border-none cursor-pointer text-white
    ${sizeClasses[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  const ButtonContent = () => (
    <>
      {loading && (
        <div className="mr-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {icon && iconPosition === "left" && !loading && <div className="mr-2">{icon}</div>}

      <span className="relative z-10">{children}</span>

      {icon && iconPosition === "right" && !loading && <div className="ml-2">{icon}</div>}

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        variants={buttonVariants}
        initial="initial"
        whileHover={disabled ? {} : "hover"}
        whileTap={disabled ? {} : "tap"}
        className={`${baseClasses} group no-underline`}
        style={buttonVariants.initial}
        {...props}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? {} : "hover"}
      whileTap={disabled ? {} : "tap"}
      className={`${baseClasses} group`}
      style={buttonVariants.initial}
      disabled={disabled}
      {...props}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default GradientButton;
