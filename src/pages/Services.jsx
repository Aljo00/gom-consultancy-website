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
  {
    icon: <FaBullhorn size={32} className="text-purple-500" />,
    title: "Content & Social Media Marketing",
    text: "We create powerful content strategies that drive results. From engaging posts to platform-specific campaigns, we help you build a loyal community and impactful digital voice.",
  },
  {
    icon: <FaYoutube size={32} className="text-rose-500" />,
    title: "YouTube Automation & Management",
    text: "We manage your channel from A to Z content calendars, SEO, thumbnails, publishing, and performance analytics so you focus on creating while we focus on scaling.",
  },
  {
    icon: <FaRocket size={32} className="text-fuchsia-500" />,
    title: "YouTube Growth Plan",
    text: "We deep dive into your analytics, competitors, and content to craft a custom growth blueprint that maximizes reach, subscribers, and monetization opportunities.",
  },
  {
    icon: <FaChartLine size={32} className="text-purple-600" />,
    title: "Marketing & Sales Generation",
    text: "We connect marketing with performance. Our funnel strategies turn cold leads into loyal customers using targeted ads, nurturing systems, and smart conversions.",
  },
  {
    icon: <FaGlobe size={32} className="text-indigo-500" />,
    title: "Web Development",
    text: "From idea to execution, we develop fast, elegant, responsive websites that tell your brand story and guide your visitors into action with seamless experiences.",
  },
  {
    icon: <FaPalette size={32} className="text-violet-500" />,
    title: "UI/UX Designing",
    text: "We design with purpose. Our interfaces don’t just look good they feel intuitive, reduce friction, and enhance user engagement across every device.",
  },
  {
    icon: <FaUserTie size={32} className="text-pink-500" />,
    title: "Personal Branding & Social Media Growth",
    text: "We help you build a brand that’s not just followed but respected. Define your voice, establish authority, and scale your influence across platforms.",
  },
  {
    icon: <FaQuoteRight size={32} className="text-rose-400" />,
    title: "Branding & Storytelling",
    text: "People remember stories, not products. We develop brand voices, visual systems, and narratives that emotionally connect and stand out in a crowded market.",
  },
  {
    icon: <FaVideo size={32} className="text-purple-500" />,
    title: "Video Production & Ads",
    text: "Our creative team crafts cinematic video content and high-converting ad creatives that tell your story, drive clicks, and deliver real impact.",
  },
  {
    icon: <FaUsers size={32} className="text-pink-600" />,
    title: "Influencer & UGC Marketing",
    text: "We connect you with creators who align with your brand. From influencer partnerships to UGC campaigns, we spark genuine buzz and consumer trust.",
  },
  {
    icon: <FaBookOpen size={32} className="text-fuchsia-700" />,
    title: "Strategic Content Creation",
    text: "We merge creativity with strategy to craft content that educates, entertains, and converts. Every word, image, or video is backed by intent and insight.",
  },
  {
    icon: <FaUserCircle size={32} className="text-fuchsia-700" />,
    title: "Personal Portfolio",
    text: "Tailored portfolio websites that showcase your skills, projects, experience, and online presence in a clean, modern layout to help you stand out.",
  },
  {
    icon: <FaRocket size={32} className="text-fuchsia-700" />,
    title: "Landing pages for business",
    text: "Conversion-focused landing pages designed to capture leads, promote services or campaigns, and drive traffic effectively with clear CTAs.",
  },
  {
    icon: <FaWpforms size={32} className="text-fuchsia-700" />,
    title: "CMS Integration",
    text: "Integration of headless CMS platforms like Sanity or WordPress to make content management effortless and dynamic for your team.",
  },
  {
    icon: <FaGlobe size={32} className="text-fuchsia-700" />,
    title: "Full website development",
    text: "End-to-end development of fully responsive, fast-loading websites using modern tech stacks like React, Tailwind CSS, and backend integration.",
  },
  {
    icon: <FaServer size={32} className="text-fuchsia-700" />,
    title: "Hosting and Deployment",
    text: "Secure hosting and seamless deployment setup with platforms like Vercel, Netlify, or custom servers—plus after-deployment support.",
  },
  {
    icon: <FaSearch size={32} className="text-fuchsia-700" />,
    title: "SEO-Friendly Development",
    text: "Implementation of SEO best practices including structured data, fast performance, semantic HTML, and responsive mobile-first design.",
  },
  {
    icon: <FaTools size={32} className="text-fuchsia-700" />,
    title: "Custom Website",
    text: "We build highly customized websites tailored to your unique goals—featuring interactive elements, animations, integrations, and more.",
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
      className="min-h-screen px-6 md:px-12 py-24 bg-gradient-to-br from-[#f7f0ff] to-[#f2e8ff]"
    >
      {/* Capsule */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-300">
          <MdDesignServices size={18} className="text-purple-600" />
          OUR SERVICES
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight mb-4">
        Unlock Digital Growth with{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Impactful
        </span>{" "}
        Services
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg font-medium mb-14">
        Discover how our tailored digital solutions can transform your brand's
        presence, performance, and profit.
      </p>

      {/* Service Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white border border-purple-100 rounded-2xl p-6 shadow-md flex flex-col gap-4 transition duration-300 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-purple-300 hover:border-transparent"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-purple-800 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base font-medium leading-relaxed group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition duration-300">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
