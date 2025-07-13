import React from "react";
import {
  FaBullhorn,
  FaYoutube,
  FaRocket,
  FaChartLine,
  FaGlobe,
  FaPalette,
  FaUserTie,
  FaQuoteRight,
  FaVideo,
  FaUsers,
  FaBookOpen,
  FaUserCircle,
  FaWpforms,
  FaServer,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  // same array as you already have
  // keeping it unchanged for brevity
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full px-4 sm:px-6 md:px-12 py-20 bg-gradient-to-br from-[#f7f0ff] to-[#f2e8ff]"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-4 sm:mb-6">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-300">
          <MdDesignServices size={18} className="text-purple-600" />
          OUR SERVICES
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight mb-4">
        Unlock Digital Growth with{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Impactful
        </span>{" "}
        Services
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-medium mb-12">
        Discover how our tailored digital solutions can transform your brand's
        presence, performance, and profit.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white border border-purple-100 rounded-2xl p-6 shadow-md flex flex-col gap-4 transition duration-300 hover:ring-2 hover:ring-purple-300 hover:border-transparent"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-purple-800 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base font-medium leading-relaxed group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
