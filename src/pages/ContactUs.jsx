// src/pages/ContactUs.jsx
import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ClientsMarquee from "../components/ClientsMarquee";

const ContactUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen py-20 pt-35 px-6 md:px-12 bg-gradient-to-br from-[#e6f4ff] to-[#f7fbff]"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-300">
          <MdPhone size={18} className="text-blue-600" />
          Contact Us
        </span>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 leading-tight">
        Let’s <span className="text-blue-600">Connect & Collaborate</span>
      </h1>

      {/* Sub Text */}
      <p className="text-center text-gray-700 font-medium mb-12 max-w-2xl mx-auto">
        We have a strong desire to collaborate and welcome esteemed brands and
        enthusiastic entrepreneurs to join us.
      </p>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Phone / WhatsApp Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 text-center"
        >
          <div className="flex justify-center items-center text-blue-600 mb-4">
            <MdPhone size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Phone / WhatsApp
          </h3>
          <p className="text-gray-700 mb-4 font-medium">+14379084422</p>
          <a
            href="https://wa.me/+14379084422?text=Hi! I'm interested in your services. Can we discuss more?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition"
          >
            <SiWhatsapp className="inline mr-2" /> Send WhatsApp
          </a>
        </motion.div>

        {/* Email Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 text-center"
        >
          <div className="flex justify-center items-center text-blue-600 mb-4">
            <MdEmail size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-700 mb-4 font-medium">
            gomdigitalconsultancy@gmail.com
          </p>
          <a
            href="mailto:gomdigitalconsultancy@gmail.com?subject=Collaboration%20Request&body=Hi%20GOM%20Team%2C%20I%20would%20like%20to%20collaborate%20with%20you..."
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition"
          >
            Send Email
          </a>
        </motion.div>

        {/* Address Card */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 text-center"
        >
          <div className="flex justify-center items-center text-blue-600 mb-4">
            <MdLocationOn size={40} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Office
          </h3>
          <p className="text-gray-700 font-medium">
            200 Elm Street, <br />
            Toronto, Ontario, Canada <br />
            Postal Code: M5T 1K4
          </p>
        </motion.div>
      </div>

      <ClientsMarquee />
    </motion.section>
  );
};

export default ContactUs;
