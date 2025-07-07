import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyle =
    "font-semibold px-3 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white";

  return (
    <nav className="bg-blue-50 w-full shadow-sm border-b border-blue-200">
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Left: Logo + Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png" // Update this path
            alt="GOM Logo"
            className="w-9 h-9 rounded-full"
          />
          <span className="text-blue-800 text-2xl font-medium font-size tracking-wide">
            Gom Digital Consultancy
          </span>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
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

        {/* Right: Desktop Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919876543210?text=Hi%20GOM%20Digital%20Team%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile: Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden w-full bg-blue-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-2">
          <a href="#about" className={navLinkStyle}>
            About
          </a>
          <a href="#services" className={navLinkStyle}>
            Services
          </a>
          <a href="#contact" className={navLinkStyle}>
            Contact Us
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20GOM%20Digital%20Team%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
