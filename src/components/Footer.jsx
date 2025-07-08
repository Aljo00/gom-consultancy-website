import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
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
      className="w-full border-t-4 border-blue-600 bg-gradient-to-br from-[#d2f0ff] to-[#f0f8ff] shadow-inner pt-14 pb-8 px-4 md:px-8"
    >
      {/* Top Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 text-center sm:text-left">
        {/* 1. Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-800 mb-3">
            Gom Digital Consultancy
          </h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            Elevating brands through digital innovation and result-driven
            strategies.
          </p>
        </div>

        {/* 2. Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Explore</h3>
          <ul className="space-y-3">
            {["about", "services", "faqs", "contact"].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-600 hover:text-blue-600 font-medium transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://www.instagram.com/gomdigitalconsultancy?utm_source=ig_web_button_share_sheet&igsh=MTVpenRhYmVzb243dA=="
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@gomdigitalconsultancy9561"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition text-white"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 my-8"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 font-medium">
        © {currentYear} Gom Digital Consultancy. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
