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
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <FaBullhorn size={32} className="text-blue-600" />,
    title: "Content & Social Media Marketing",
    text: "We create powerful content strategies that drive results. From engaging posts to platform-specific campaigns, we help you build a loyal community and impactful digital voice.",
  },
  {
    icon: <FaYoutube size={32} className="text-red-600" />,
    title: "YouTube Automation & Management",
    text: "We manage your channel from A to Z — content calendars, SEO, thumbnails, publishing, and performance analytics — so you focus on creating while we focus on scaling.",
  },
  {
    icon: <FaRocket size={32} className="text-pink-600" />,
    title: "YouTube Growth Plan",
    text: "We deep dive into your analytics, competitors, and content to craft a custom growth blueprint that maximizes reach, subscribers, and monetization opportunities.",
  },
  {
    icon: <FaChartLine size={32} className="text-green-600" />,
    title: "Marketing & Sales Generation",
    text: "We connect marketing with performance. Our funnel strategies turn cold leads into loyal customers using targeted ads, nurturing systems, and smart conversions.",
  },
  {
    icon: <FaGlobe size={32} className="text-indigo-600" />,
    title: "Web Development",
    text: "From idea to execution, we develop fast, elegant, responsive websites that tell your brand story and guide your visitors into action with seamless experiences.",
  },
  {
    icon: <FaPalette size={32} className="text-purple-600" />,
    title: "UI/UX Designing",
    text: "We design with purpose. Our interfaces don’t just look good — they feel intuitive, reduce friction, and enhance user engagement across every device.",
  },
  {
    icon: <FaUserTie size={32} className="text-yellow-600" />,
    title: "Personal Branding & Social Media Growth",
    text: "We help you build a brand that’s not just followed — but respected. Define your voice, establish authority, and scale your influence across platforms.",
  },
  {
    icon: <FaQuoteRight size={32} className="text-teal-600" />,
    title: "Branding & Storytelling",
    text: "People remember stories, not products. We develop brand voices, visual systems, and narratives that emotionally connect and stand out in a crowded market.",
  },
  {
    icon: <FaVideo size={32} className="text-red-500" />,
    title: "Video Production & Ads",
    text: "Our creative team crafts cinematic video content and high-converting ad creatives that tell your story, drive clicks, and deliver real impact.",
  },
  {
    icon: <FaUsers size={32} className="text-orange-600" />,
    title: "Influencer & UGC Marketing",
    text: "We connect you with creators who align with your brand. From influencer partnerships to UGC campaigns, we spark genuine buzz and consumer trust.",
  },
  {
    icon: <FaBookOpen size={32} className="text-teal-800" />,
    title: "Strategic Content Creation",
    text: "We merge creativity with strategy to craft content that educates, entertains, and converts. Every word, image, or video is backed by intent and insight.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen px-6 md:px-12 py-24 bg-gradient-to-br from-[#f0f8ff] to-[#e6f4ff]"
    >
      {/* Capsule */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-300">
          <MdDesignServices size={18} className="text-blue-600" />
          OUR SERVICES
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight mb-4">
        Unlock Digital Growth with{" "}
        <span className="text-blue-600">Impactful</span> Services
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg font-medium mb-14">
        Discover how our tailored digital solutions can transform your brand's
        presence, performance, and profit.
      </p>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base font-medium leading-relaxed">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
