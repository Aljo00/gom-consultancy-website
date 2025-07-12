import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = "relative font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="GOM Logo" 
                  className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GOM DIGITAL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={navLinkStyle}>Home</Link>
              <Link to="/about" className={navLinkStyle}>About</Link>
              
              <div 
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className={`${navLinkStyle} flex items-center space-x-1`}>
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50"
                    >
                      <div className="grid gap-2">
                        {servicesList.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/faqs" className={navLinkStyle}>FAQs</Link>
              <Link 
                to="/contact-us" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-gray-100"
              >
                <div className="px-4 py-4 space-y-2">
                  <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</Link>
                  <Link to="/about" className="block py-2 text-gray-700 hover:text-purple-600" onClick={() => setIsOpen(false)}>About</Link>
                  <Link to="/services" className="block py-2 text-gray-700 hover:text-purple-600" onClick={() => setIsOpen(false)}>Services</Link>
                  <Link to="/faqs" className="block py-2 text-gray-700 hover:text-purple-600" onClick={() => setIsOpen(false)}>FAQs</Link>
                  <Link to="/contact-us" className="block py-2 text-gray-700 hover:text-purple-600" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;