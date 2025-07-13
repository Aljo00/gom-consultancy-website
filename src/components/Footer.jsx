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
      className="w-full px-6 md:px-12 py-20 bg-[#0e1321] text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-0 md:gap-x-20">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 tracking-wide">
            GOM Digital Consultancy
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Transforming businesses through innovative digital solutions,
            strategic marketing, and cutting-edge technology that drives
            measurable results.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/gomdigitalconsultancy"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@gomdigitalconsultancy9561"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white hover:scale-110 transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-300 text-base">
            <li>
              <Link
                to="/"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="space-y-6 text-gray-300 text-base">
            <li className="flex items-start gap-3">
              <FaPhone className="text-purple-400 mt-1" />
              <a
                href="https://wa.me/14379084422?text=Hi%20GOM%20Digital%20Consultancy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                +1 437 908 4422
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-purple-400 mt-1" />
              <a
                href="mailto:gomdigitalconsultancy@gmail.com?subject=Inquiry%20about%20GOM%20Digital%20Consultancy%20Services"
                className="hover:text-white transition relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                gomdigitalconsultancy@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-400 mt-1" />
              <span>
                200 Elm Street, Toronto
                <br />
                Ontario, Canada M5T 1K4
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 mt-16 mb-6"></div>

      <div className="text-center text-sm text-gray-500 tracking-wide">
        © {currentYear} GOM Digital Consultancy. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
