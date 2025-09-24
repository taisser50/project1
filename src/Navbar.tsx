import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import Dropdown from "./components/Dropdown";
import { AuthContext } from "./Context/AuthContext";


// خصائص التحريك (variants)
const navVariants = {
  hidden: { 
    opacity: 0, 
    y: -20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const linkHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const signInVariants = {
  rest: { 
    scale: 1
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const MotionLink = motion(Link);

const moreItems = [
  { label: 'About us', link: '/AboutCo' },
  { label: 'Barrier ADT', link: '/ADTBARRIER' },
  { label: 'Solar System', link: '/SolarSystem' },
  { label: 'Contracting', link: '/Contracting' },
  { label: 'Software ADT', link: '/SoftwareADT' },
  { label: 'Products Partners ', link: '/HIK' },
];

// المكون المصمم الجديد للناف بار
const StyledNavbar = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  
  /* خلفية شفافة وتأثير الزجاج */
  background: rgba(255, 255, 255, 0.05); /* شفافية عالية جداً */
  backdrop-filter: blur(25px) brightness(1.1); /* زيادة التمويه والسطوع */
  -webkit-backdrop-filter: blur(25px) brightness(1.1);
  
  /* حدود لجعل الحواف أكثر وضوحاً */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  /* إضافة ظل خفيف */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(location.pathname === '/' || location.pathname === '/Home');
  }, [location]);

  return (
    <AnimatePresence>
      <StyledNavbar
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Logo />
        </motion.div>

        <div className="flex gap-20px items-center <md:hidden">
          {[
            { to: "/Home", label: "Home" },
            { to: "/ContactUs", label: "Contact Us" },
            { to: "/Jop", label: "Jobs" },
            { to: "/Fas", label: "Fire Alarm Sanjiang" },
            { to: "/OurSolutions", label: "Solutions" },
        

          ].map((link, index) => (
            <motion.div key={link.to} variants={itemVariants} custom={index}>
              <MotionLink
                to={link.to}
                variants={linkHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer no-underline text-gray-700 font-medium
                          hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
                          hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-out
                          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                          after:bg-gradient-to-r after:from-blue-600 after:to-purple-600
                          after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {link.label}
              </MotionLink>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Dropdown variants={itemVariants} items={moreItems} />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative">
          {!user ? (
            <Link to="/Login" key="signin">
              <motion.button
                variants={signInVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="flex gap-2 items-center px-6 py-3 rounded-full text-white font-medium border-none bg-gradient-to-r from-gray-600 to-blue-600"
              >
                <span className="relative z-10">Sign In</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowRight />
                </motion.div>
              </motion.button>
            </Link>
          ) : (
            <div key="user" className="group relative">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">
                {user.name}
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow rounded mt-2 right-0 w-40">
                <p className="px-4 py-2 text-sm text-gray-700 border-b">{user.email}</p>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </StyledNavbar>
    </AnimatePresence>
  );
}

export default Navbar;