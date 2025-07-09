import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/Gom Digital consultancy.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinkStyle =
    "font-semibold px-4 py-2 rounded-xl transition-all duration-300 text-purple-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 left-1/2 transform -translate-x-1/2 ${
        isScrolled ? "top-4 w-[92%] md:w-[85%]" : "top-0 w-full"
      } transition-all duration-300`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "rounded-2xl border border-purple-200 bg-white/30 backdrop-blur-md backdrop-saturate-150 shadow-xl px-6 py-3"
            : "px-4 md:px-6 py-4"
        }`}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img
              src={logo}
              alt="GOM Logo"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              GOM DIGITAL CONSULTANCY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/about" className={navLinkStyle}>
              About
            </Link>
            <Link to="/services" className={navLinkStyle}>
              Services
            </Link>
            <Link to="/faqs" className={navLinkStyle}>
              Faqs
            </Link>
            <Link to="/contact-us" className={navLinkStyle}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-700 cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 flex flex-col space-y-2"
            >
              <Link
                to="/about"
                className={navLinkStyle}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={navLinkStyle}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/faqs"
                className={navLinkStyle}
                onClick={() => setIsOpen(false)}
              >
                Faqs
              </Link>
              <Link
                to="/contact-us"
                className={navLinkStyle}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
