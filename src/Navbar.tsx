import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./Context/AuthContext";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./components/DarkModeToggle";

// Variants للحركة
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Styled Navbar
const StyledNavbar = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px) brightness(1.1);
  -webkit-backdrop-filter: blur(25px) brightness(1.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const moreItems = [
  { label: "About us", link: "/AboutCo" },
  { label: "Barrier ADT", link: "/ADTBARRIER" },
  { label: "Solar System", link: "/SolarSystem" },
  { label: "Contracting", link: "/Contracting" },
  { label: "Software ADT", link: "/SoftwareADT" },
  { label: "Products Partners", link: "/HIK" },
];

// Mobile More Menu Component
const MobileMoreMenu: React.FC<{
  items: { label: string; link: string }[];
  setIsOpen: (value: boolean) => void;
}> = ({ items, setIsOpen }) => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="mt-2">
      <button
        onClick={() => setMoreOpen(!moreOpen)}
        className="w-full text-left py-3 text-lg font-medium text-gray-800 hover:text-blue-600 flex justify-between items-center"
      >
        More
        <motion.span
          animate={{ rotate: moreOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          ▶
        </motion.span>
      </button>

      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden pl-4"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  setIsOpen(false); 
}, [location]);

  const links = [
    { to: "/Home", label: "Home" },
    { to: "/ContactUs", label: "Contact Us" },
    { to: "/Jop", label: "Jobs" },
    { to: "/Fas", label: "Fire Alarm Sanjiang" },
    { to: "/OurSolutions", label: "Solutions" },
  ];

  return (
    <AnimatePresence  initial={false} >
      <StyledNavbar variants={navVariants} initial="hidden" animate="visible">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Logo />
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <motion.div key={link.to} variants={itemVariants}>
              <Link
                to={link.to}
                className="font-body relative cursor-pointer text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          {/* Desktop Dropdown More (يمكنك وضع Dropdown عادي هنا) */}
          <motion.div variants={itemVariants}>
            <div className="relative group p-4">
              <button className="font-body  cursor-pointer text-gray-700 font-medium hover:text-blue-600">
                More
              </button>
              <div className="absolute hidden group-hover:block transition-all duration-500 group-hover:delay-500 bg-white  shadow-lg rounded mt-2 right-0 w-48">
                {moreItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
<DarkModeToggle />
        {/* Sign In / User */}
        <motion.div variants={itemVariants} className="hidden md:block">
          {!user ? (
            <Link to="/Login">
              <motion.button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-gray-600 to-blue-600">
                Sign In
              </motion.button>
            </Link>
          ) : (
            <div className="group relative">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">
                {user.name}
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow rounded mt-2 right-0 w-40">
                <p className="px-4 py-2 text-sm text-gray-700 border-b">
                  {user.email}
                </p>
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

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile menu panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-lg z-50 flex flex-col p-6"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="self-end mb-4 p-2 text-gray-800"
                >
                  <X size={24} />
                </button>

                {/* Links */}
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="py-3 text-lg font-medium text-gray-800 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile More */}
                <MobileMoreMenu items={moreItems} setIsOpen={setIsOpen} />

                {/* Sign In / Log out */}
                <div className="mt-6">
                  {!user ? (
                    <Link to="/Login" onClick={() => setIsOpen(false)}>
                      <button className="w-full px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-gray-600 to-blue-600">
                        Sign In
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-800"
                    >
                      Log out
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </StyledNavbar>
    </AnimatePresence>
  );
};

export default Navbar;
