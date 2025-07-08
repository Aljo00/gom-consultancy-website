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
} from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <FaBullhorn size={32} className="text-blue-600" />,
    title: "Content & Social Media Marketing",
    text: "We craft impactful content strategies and manage your social media platforms to grow your audience, increase engagement, and build meaningful connections.",
  },
  {
    icon: <FaYoutube size={32} className="text-red-600" />,
    title: "YouTube Automation & Management",
    text: "Let us handle your YouTube channel end-to-end — from content planning and optimization to publishing and analytics — so you can focus on creating while we grow your presence.",
  },
  {
    icon: <FaRocket size={32} className="text-pink-600" />,
    title: "YouTube Growth Plan",
    text: "Get a custom-built growth strategy tailored to your niche. We analyse your content, audience, and competitors to design a roadmap that boosts views, subscribers, and revenue.",
  },
  {
    icon: <FaChartLine size={32} className="text-green-600" />,
    title: "Marketing & Sales Generation",
    text: "We combine performance marketing with strategic sales funnels to convert leads into loyal customers. Our data-driven approach ensures every campaign drives measurable results.",
  },
  {
    icon: <FaGlobe size={32} className="text-indigo-600" />,
    title: "Web Development",
    text: "We design and build modern, responsive websites that reflect your brand and convert visitors into customers. From landing pages to e‑commerce, we deliver seamless digital experiences.",
  },
  {
    icon: <FaPalette size={32} className="text-purple-600" />,
    title: "UI/UX Designing",
    text: "Great design isn’t just about beauty — it’s about user experience. Our UI/UX experts craft intuitive, user-friendly interfaces that enhance interaction and elevate your digital product.",
  },
  {
    icon: <FaUserTie size={32} className="text-yellow-600" />,
    title: "Personal Branding & Social Media Growth",
    text: "Grow your personal brand with our custom strategies across platforms. We help you define your voice, position your expertise, and build a strong, consistent online identity.",
  },
  {
    icon: <FaQuoteRight size={32} className="text-teal-600" />,
    title: "Branding & Storytelling",
    text: "We help brands find their voice and tell their story in a way that connects. From logo to brand tone, we build identities that are authentic, memorable, and emotionally engaging.",
  },
  {
    icon: <FaVideo size={32} className="text-red-500" />,
    title: "Video Production & Ads",
    text: "High-quality video content is essential in today’s digital world. We produce professional videos and ad creatives that captivate, communicate, and convert — from script to screen.",
  },
  {
    icon: <FaUsers size={32} className="text-orange-600" />,
    title: "Influencer & UGC Marketing",
    text: "Leverage the power of trusted creators. We connect your brand with influencers and curate authentic user-generated content that drives awareness, trust, and sales.",
  },
  {
    icon: <FaBookOpen size={32} className="text-teal-800" />,
    title: "Strategic Content Creation",
    text: "Content without strategy is noise. We plan, create, and distribute content that aligns with your business goals, speaks to your audience, and performs across platforms.",
  },
];

const HomeServices = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full pt-12 pb-20 bg-[#f0fdff]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center" ref={ref}>
        {/* Capsule Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium border border-blue-300 text-sm mb-4"
        >
          <MdVerifiedUser size={16} className="text-blue-600" />
          OUR SERVICES
        </motion.p>

        {/* Hero Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6"
        >
          High-Impact <span className="text-blue-600">Marketing</span>{" "}
          Strategies That Drive{" "}
          <span className="text-blue-600">Growth And Results</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg font-medium mb-12"
        >
          We partner with you to craft a successful business model that
          authentically reflects your unique vision while achieving your desired
          conversion goals.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((s, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md transition-shadow duration-300 text-left flex flex-col"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {s.title}
              </h3>
              <p className="text-gray-600 flex-grow">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
