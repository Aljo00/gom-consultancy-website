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
    icon: <FaBullhorn size={20} />,
    gradient: "from-pink-500 to-purple-500",
    title: "Content & Social Media Marketing",
    text: "We craft impactful content strategies and manage your social media platforms to grow your audience, increase engagement, and build meaningful connections.",
  },
  {
    icon: <FaYoutube size={20} />,
    gradient: "from-rose-500 to-rose-400",
    title: "YouTube Automation & Management",
    text: "Let us handle your YouTube channel end-to-end from content planning and optimization to publishing and analytics so you can focus on creating while we grow your presence.",
  },
  {
    icon: <FaRocket size={20} />,
    gradient: "from-fuchsia-500 to-pink-500",
    title: "YouTube Growth Plan",
    text: "Get a custom-built growth strategy tailored to your niche. We analyse your content, audience, and competitors to design a roadmap that boosts views, subscribers, and revenue.",
  },
  {
    icon: <FaChartLine size={20} />,
    gradient: "from-purple-600 to-violet-500",
    title: "Marketing & Sales Generation",
    text: "We combine performance marketing with strategic sales funnels to convert leads into loyal customers. Our data-driven approach ensures every campaign drives measurable results.",
  },
  {
    icon: <FaGlobe size={20} />,
    gradient: "from-indigo-500 to-purple-500",
    title: "Web Development",
    text: "We design and build modern, responsive websites that reflect your brand and convert visitors into customers. From landing pages to e‑commerce, we deliver seamless digital experiences.",
  },
  {
    icon: <FaPalette size={20} />,
    gradient: "from-fuchsia-500 to-pink-500",
    title: "UI/UX Designing",
    text: "Great design isn’t just about beauty it’s about user experience. Our UI/UX experts craft intuitive, user-friendly interfaces that enhance interaction and elevate your digital product.",
  },
  {
    icon: <FaUserTie size={20} />,
    gradient: "from-pink-500 to-pink-400",
    title: "Personal Branding & Social Media Growth",
    text: "Grow your personal brand with our custom strategies across platforms. We help you define your voice, position your expertise, and build a strong, consistent online identity.",
  },
  {
    icon: <FaQuoteRight size={20} />,
    gradient: "from-rose-400 to-pink-400",
    title: "Branding & Storytelling",
    text: "Creating a strong brand impact with unique storytelling and visual merchandising. From logo to brand tone, we build identities that are authentic, memorable, and emotionally engaging.",
  },
  {
    icon: <FaVideo size={20} />,
    gradient: "from-purple-500 to-violet-500",
    title: "Video Production & Ads",
    text: "High-quality video content is essential in today’s digital world. We produce professional videos and ad creatives that captivate, communicate, and convert from script to screen.",
  },
  {
    icon: <FaUsers size={20} />,
    gradient: "from-pink-500 to-fuchsia-600",
    title: "Influencer & UGC Marketing",
    text: "Leverage the power of trusted creators. We connect your brand with influencers and curate authentic user-generated content that drives awareness, trust, and sales.",
  },
  {
    icon: <FaBookOpen size={20} />,
    gradient: "from-fuchsia-700 to-pink-600",
    title: "Strategic Content Creation",
    text: "Content without strategy is noise. We plan, create, and distribute content that aligns with your business goals, speaks to your audience, and performs across platforms.",
  },
];

const HomeServices = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full pt-16 pb-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Capsule Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium border border-purple-300 text-sm mb-6 bg-purple-100 text-purple-700"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
            <MdVerifiedUser size={14} />
          </span>
          OUR SERVICES
        </motion.p>

        {/* Hero Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
        >
          High-Impact{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Marketing
          </span>{" "}
          Strategies That Drive{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Growth & Results
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg font-medium mb-12"
        >
          Partner with us to craft a successful business model that
          authentically reflects your unique vision while achieving your desired
          conversion goals.
        </motion.p>

        {/* Services Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover="hover"
              className="group relative rounded-3xl p-6 bg-white shadow-md border border-gray-200 ring-1 ring-gray-100 hover:ring-2 hover:ring-purple-300 transition-all duration-300"
            >
              {/* Icon Box */}
              <motion.div
                variants={{
                  hover: {
                    scale: 1.2,
                    rotate: 6,
                    boxShadow: "0px 10px 25px rgba(236, 72, 153, 0.35)",
                  },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-14 h-14 mb-5 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-md`}
              >
                {React.cloneElement(service.icon, {
                  className: "text-white",
                  size: 28,
                })}
              </motion.div>

              {/* Title */}
              <motion.h3
                variants={{
                  hover: {
                    y: -4,
                    color: "#a855f7",
                  },
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-lg font-bold text-gray-900 mb-2"
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={{
                  hover: { opacity: 0.95, y: -2 },
                }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                {service.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
