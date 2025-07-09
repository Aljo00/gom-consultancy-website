import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full pt-16 pb-10 px-6 md:px-12 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* 🔻 Gradient Top Line Outside Content Box */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left relative z-20">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-purple-700 mb-4">
            Gom Digital Consultancy
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            Elevating brands through digital innovation and result-driven
            strategies.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-5">
            Explore
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="relative inline-block text-gray-600 font-medium transition hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative inline-block text-gray-600 font-medium transition hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="relative inline-block text-gray-600 font-medium transition hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="relative inline-block text-gray-600 font-medium transition hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="relative inline-block text-gray-600 font-medium transition hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="relative inline-block text-gray-600 font-medium transition hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-5">
            Contact
          </h3>
          <ul className="space-y-4 text-gray-600 font-medium">
            <li className="flex items-start gap-3">
              <FaPhone className="text-purple-500 mt-1" />
              +1 437 908 4422
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-purple-500 mt-1" />
              Gomdigitalconsultancy@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-500 mt-1" />
              <span>
                200 Elm Street, Toronto, Ontario, Canada
                <br />
                Postal Code: M5T 1K4
              </span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-5">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://www.instagram.com/gomdigitalconsultancy"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full transition hover:scale-110 text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@gomdigitalconsultancy9561"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full transition hover:scale-110 text-white"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 mt-10 mb-6"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 font-medium">
        © {currentYear} Gom Digital Consultancy. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
