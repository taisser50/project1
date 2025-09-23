import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define a type for the component props to satisfy TypeScript
interface GlassButtonProps {
  text: string | React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

// A simple reusable button component with glass effect styling
const GlassButton = ({ text, ...props }: GlassButtonProps) => (
  <motion.button
    {...props}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="relative w-full py-4 px-6 font-bold text-white transition-all duration-300 ease-out
               bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 
               hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700
               rounded-2xl shadow-xl hover:shadow-2xl 
               focus:outline-none focus:ring-4 focus:ring-blue-500/50
               overflow-hidden group transform-gpu"
  >
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                    -skew-x-12 -translate-x-full group-hover:translate-x-full
                    transition-transform duration-700" />
    
    {/* Floating Particles */}
    <div className="absolute top-2 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
    <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-cyan-300/80 rounded-full animate-pulse opacity-0 group-hover:opacity-100" />
    
    <span className="relative z-10 tracking-wide">{text}</span>
  </motion.button>
);

// Enhanced Input Field Component
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  error?: string;
}

const InputField = ({ icon, error, ...props }: InputFieldProps) => (
  <motion.div 
    className="relative"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative group">
      {/* Icon Container */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10
                      text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Input Field */}
      <input
        {...props}
        className={`w-full py-4 pl-12 pr-4 text-gray-800 bg-white/80 backdrop-blur-sm
                   rounded-2xl border-2 transition-all duration-300
                   ${error 
                     ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" 
                     : "border-gray-200/50 focus:border-blue-400 focus:ring-blue-500/20 hover:border-gray-300"
                   }
                   focus:outline-none focus:ring-4 focus:bg-white/90
                   shadow-lg hover:shadow-xl focus:shadow-2xl
                   placeholder-gray-400`}
      />
      
      {/* Glowing Border Effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                      ${error 
                        ? "bg-gradient-to-r from-red-400/20 to-pink-400/20" 
                        : "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                      } 
                      group-focus-within:opacity-100 blur-sm pointer-events-none`} />
    </div>
    
    {/* Error Message with Animation */}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          className="mt-2 text-sm text-red-500 pl-4 font-medium"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

// Animated Icons
const EmailIcon = () => (
  <motion.svg 
    whileHover={{ scale: 1.1, rotate: 5 }}
    xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </motion.svg>
);

const LockIcon = () => (
  <motion.svg 
    whileHover={{ scale: 1.1, rotate: -5 }}
    xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </motion.svg>
);


// Define types for form data and validation errors
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const App = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Particle animation state
  const [particles, setParticles] = useState<any[]>([]);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const validate = () => {
    let newErrors: Errors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }

    if (!isLoginMode) {
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm password is required.";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (validate()) {
      setIsLoading(true);
      const action = isLoginMode ? "Login" : "Sign Up";
      
      // Simulate API call
      setTimeout(() => {
        setMessage(`${action} successful! `);
        setFormData({ email: "", password: "", confirmPassword: "" });
        setErrors({});
        setIsLoading(false);
      }, 1500);
    } else {
      setMessage("Please fix the errors in the form. ❌");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Form Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative"
      >
        {/* Glassmorphism Card */}
        <div className="relative bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 
                        border border-white/30 hover:shadow-3xl transition-all duration-500">
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 animate-bounce" />
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.h1 
              className="text-4xl font-white bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
              animate={{ 
                backgroundPosition: isLoginMode ? ["0%", "100%"] : ["100%", "0%"],
              }}
              transition={{ duration: 0.8 }}
            >
              {isLoginMode ? "Welcome Back!" : "Join Our Journey!"}
            </motion.h1>
            <motion.p 
              className="text-gray-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {isLoginMode ? "Sign in to continue your adventure." : "Create your account and start exploring."}
            </motion.p>
          </motion.div>

          {/* Success/Error Message */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className={`p-4 mb-6 rounded-2xl text-center font-bold backdrop-blur-sm border ${
                  message.includes("successful") 
                    ? "bg-green-50/80 text-green-700 border-green-200" 
                    : "bg-red-50/80 text-red-700 border-red-200"
                } shadow-lg`}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            <InputField
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              icon={<EmailIcon />}
              error={errors.email}
            />

            <InputField
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              icon={<LockIcon />}
              error={errors.password}
            />

            <AnimatePresence mode="wait">
              {!isLoginMode && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <InputField
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    icon={<LockIcon />}
                    error={errors.confirmPassword}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div variants={itemVariants} className="pt-2">
              <GlassButton 
                type="submit" 
                text={isLoading ? (
                  <div className=" flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (isLoginMode ? "Sign In " : "Create Account 🚀")}
                disabled={isLoading}
              />
            </motion.div>
          </motion.form>

          {/* Mode Toggle */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-2">
              {isLoginMode ? "New to our platform?" : "Already have an account?"}
            </p>
            <motion.button
              onClick={() => setIsLoginMode(!isLoginMode)}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 
                         bg-clip-text hover:from-blue-700 hover:to-purple-700 
                         transition-all duration-300 relative group"
            >
              {isLoginMode ? "Create Account" : "Sign In Instead"}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                              group-hover:w-full transition-all duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
