import React from "react";
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import happyClientsImg from "../assets/Happy clients.jpg";
import AboutStatsSection from "../components/AboutStatsSection";
import ClientsMarquee from "../components/ClientsMarquee";
import HomeServices from "../components/HomeService";
import ProjectIdeaCTA from "../components/ProjectIdeaCTA";
import Faqs from "../components/Faqs";
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
  const navigate = useNavigate();

  return (
    <section className="w-full pt-7 px-4 md:px-8 bg-white text-center overflow-hidden">
      <div className="px-4 md:px-8 py-24 bg-white text-center">
        {/* 🔹 Top Capsule Badge */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium border border-purple-300 mb-6 text-sm bg-purple-100 text-purple-700"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
            <FaGlobe size={14} />
          </span>
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
          The most{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Trusted Content
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            and Marketing
          </span>{" "}
          <span className="text-black">agency</span>
        </motion.h1>

        {/* 🔹 Description */}
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

        {/* 🔹 CTA Button with Gradient Hover Effect */}
        <motion.button
          onClick={() => navigate("/services")}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative inline-flex items-center justify-center font-semibold px-6 py-3 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 cursor-pointer"
        >
          {/* White background fade on hover */}
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />

          {/* Gradient Border on hover */}
          <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"></span>

          {/* Gradient text on hover */}
          <span className="relative z-10 bg-none group-hover:bg-gradient-to-r from-purple-500 to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            Get Started
          </span>

          <span className="relative z-10 ml-2 bg-none group-hover:bg-gradient-to-r from-purple-500 to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            →
          </span>
        </motion.button>

        {/* 🔹 HAPPY CLIENTS IMAGE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative w-full text-center pb-5 pt-7"
        >
          <img
            src={happyClientsImg}
            alt="Happy Clients"
            className="mx-auto w-[90%] h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* 🔹 About Stats Section */}
      <AboutStatsSection />

      {/* 🔹 Clients Logos */}
      <ClientsMarquee />

      {/* 🔹 Services Section */}
      <HomeServices />

      {/* 🔹 FAQs */}
      <Faqs />

      {/* 🔹 CTA Banner */}
      <ProjectIdeaCTA />
    </section>
  );
};

export default Home;
