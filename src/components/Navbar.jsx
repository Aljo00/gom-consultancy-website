import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/Gom Digital consultancy.png";

const servicesList = [
  "Content & Social Media Marketing",
  "YouTube Automation & Management",
  "YouTube Growth Plan",
  "Marketing & Sales Generation",
  "Web Development",
  "UI/UX Designing",
  "Personal Branding",
  "Branding & Storytelling",
  "Video Production & Ads",
  "Influencer & UGC Marketing",
  "Strategic Content Creation",
  "Personal Portfolio",
  "Landing Pages",
  "CMS Integration",
  "Full Website Development",
  "Hosting & Deployment",
  "SEO-Friendly Development",
  "Custom Website",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
              <span
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className={navLinkStyle + " cursor-pointer"}
              >
                Services
              </span>
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

      {/* Dropdown Services Menu */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="fixed z-40 top-[100px] left-0 w-full h-[70vh] overflow-auto bg-white border-t border-purple-100 px-6 py-6"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {servicesList.map((title, idx) => (
                <div
                  key={idx}
                  className="group text-purple-700 font-medium text-sm sm:text-base relative cursor-pointer px-2 py-2"
                >
                  <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    {title}
                  </span>
                  <span className="absolute right-2 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    →
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
