import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Gom Digital consultancy.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle =
    "font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white text-blue-700";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[85%]"
    >
      <div className="rounded-2xl shadow-xl border border-blue-100 bg-white/30 backdrop-blur-md backdrop-saturate-150 px-6 py-3 transition-all duration-300">
        {/* 🔹 Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="GOM Logo"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-blue-800 text-xl md:text-2xl font-bold tracking-wide">
              Gom Digital Consultancy
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className={navLinkStyle}>
              About
            </a>
            <a href="#services" className={navLinkStyle}>
              Services
            </a>
            <a href="#contact" className={navLinkStyle}>
              Contact Us
            </a>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 flex flex-col space-y-2"
            >
              <a href="#about" className={navLinkStyle}>
                About
              </a>
              <a href="#services" className={navLinkStyle}>
                Services
              </a>
              <a href="#contact" className={navLinkStyle}>
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
