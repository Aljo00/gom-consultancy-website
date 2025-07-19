import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/Gom Digital consultancy.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle =
    "relative font-semibold px-2 py-1 text-purple-700 transition-all duration-300 hover:text-purple-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full after:w-0 hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
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
              ? "rounded-2xl border border-purple-200 bg-white/30 backdrop-blur-md shadow-xl px-6 py-3"
              : "px-4 md:px-6 py-4 border-b-4 border-purple-500/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="GOM Logo" className="w-9 h-9 rounded-full" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                GOM DIGITAL CONSULTANCY
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center relative">
              <Link to="/" className={navLinkStyle}>
                Home
              </Link>
              <Link to="/about" className={navLinkStyle}>
                About
              </Link>
              <Link to="/services" className={navLinkStyle}>
                Services
              </Link>
              <Link to="/faqs" className={navLinkStyle}>
                FAQs
              </Link>
              <Link to="/contact-us" className={navLinkStyle}>
                Contact Us
              </Link>
            </div>

            {/* Mobile Nav Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-purple-700"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-3 flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4"
              >
                <Link
                  to="/"
                  className={navLinkStyle}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
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
                  FAQs
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
    </>
  );
};

export default Navbar;
