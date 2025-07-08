import React from "react";
import { FaGlobe } from "react-icons/fa";
import happyClientsImg from "../assets/Happy clients.jpg";
import AboutStatsSection from "../components/AboutStatsSection";
import ClientsMarquee from "../components/ClientsMarquee";
import HomeServices from "../components/HomeService";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  return (
    <section className="w-full pt-7 px-4 md:px-8 bg-white text-center overflow-hidden">
      <div className="px-4 md:px-8 py-24 bg-white text-center">
        {/* 🔹 Top Badge */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium border border-blue-300 mb-6 text-sm"
        >
          <FaGlobe className="text-blue-600" />
          CONTENT & MARKETING AGENCY
        </motion.p>

        {/* 🔹 Main Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          Partner With The{" "}
          <span className="text-blue-600">Most Trusted Content </span>
          <br />
          <span className="text-blue-600">And Marketing</span>{" "}
          <span className="text-black"> Agency</span>
        </motion.h1>

        {/* 🔹 Paragraph */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-700 max-w-2xl mx-auto text-lg font-medium mb-10"
        >
          We help businesses fix what's not working from weak branding to poor
          sales. Our goal is simple: build your brand, attract more customers,
          and help you make more money.
        </motion.p>

        {/* 🔹 CTA Button */}
        <motion.a
          href="#contact"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group inline-flex items-center justify-center bg-blue-600 hover:bg-black text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 overflow-hidden hover:px-8"
        >
          <span className="transform group-hover:-translate-x-1 transition-all duration-300">
            Get Started
          </span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </motion.a>

        {/* 🔹 HAPPY CLIENTS SECTION */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative w-full bg-gray-50 text-center pb-5 pt-7"
        >
          <img
            src={happyClientsImg}
            alt="Happy Clients"
            className="mx-auto w-[90%] h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* 🔹 Overlapping Stats Section */}
      <AboutStatsSection />

      <ClientsMarquee />

      <HomeServices />
    </section>
  );
};

export default Home;
