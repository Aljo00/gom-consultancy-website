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
    icon: <FaBullhorn />,
    title: "Content & Social Media Marketing",
    text: "We craft impactful content strategies and manage your social media platforms to grow your audience, increase engagement, and build meaningful connections.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaYoutube />,
    title: "YouTube Automation & Management",
    text: "Let us handle your YouTube channel end-to-end. From content planning and optimization to publishing and analytics, so you can focus on creating while we grow your presence.",
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: <FaRocket />,
    title: "YouTube Growth Plan",
    text: "Get a custom-built growth strategy tailored to your niche. We analyse your content, audience, and competitors to design a roadmap that boosts views, subscribers, and revenue.",
    gradient: "from-fuchsia-500 to-pink-400",
  },
  {
    icon: <FaChartLine />,
    title: "Marketing & Sales Generation",
    text: "We combine performance marketing with strategic sales funnels to convert leads into loyal customers. Our data-driven approach ensures every campaign drives measurable results.",
    gradient: "from-violet-600 to-purple-400",
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    text: "We design and build modern, responsive websites that reflect your brand and convert visitors into customers. From landing pages to e‑commerce, we deliver seamless digital experiences.",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Designing",
    text: "Great design isn’t just about beauty — it’s about user experience. Our UI/UX experts craft intuitive, user-friendly interfaces that enhance interaction and elevate your digital product",
    gradient: "from-violet-500 to-purple-300",
  },
  {
    icon: <FaUserTie />,
    title: "Personal Branding & Social Media Growth",
    text: "Grow your personal brand with our custom strategies across platforms. We help you define your voice, position your expertise, and build a strong, consistent online identity.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: <FaQuoteRight />,
    title: "Branding & Storytelling",
    text: "We help brands find their voice and tell their story in a way that connects. From logo to brand tone, we build identities that are authentic, memorable, and emotionally engaging.",
    gradient: "from-rose-400 to-pink-400",
  },
  {
    icon: <FaVideo />,
    title: "Video Production & Ads",
    text: " High-quality video content is essential in today’s digital world. We produce professional videos and ad creatives that captivate, communicate, and convert, from script to screen.",
    gradient: "from-purple-500 to-violet-400",
  },
  {
    icon: <FaUsers />,
    title: "Influencer & UGC Marketing",
    text: "Leverage the power of trusted creators. We connect your brand with influencers and curate authentic user-generated content that drives awareness, trust, and sales.",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    icon: <FaBookOpen />,
    title: "Strategic Content Creation",
    text: "Content without strategy is noise. We plan, create, and distribute content that aligns with your business goals, speaks to your audience, and performs across platforms.",
    gradient: "from-fuchsia-700 to-purple-500",
  },
  {
    icon: <FaUserCircle />,
    title: "Personal Portfolio",
    text: "Professional, modern, and responsive websites tailored for individuals to showcase their personal brand, skills, achievements, and projects. Ideal for freelancers, creatives, developers, and professionals looking to impress clients, recruiters, or collaborators online.",
    gradient: "from-pink-700 to-purple-600",
  },
  {
    icon: <FaRocket />,
    title: "Landing pages for business",
    text: "Strategically designed, high-converting pages tailored to highlight your services, special offers, or marketing campaigns — built to drive action, capture leads, and turn visitors into customers. Ideal for ads, product launches, service promotions, or limited-time deals.",
    gradient: "from-purple-600 to-fuchsia-500",
  },
  {
    icon: <FaGlobe />,
    title: "Full website development",
    text: "End-to-end website development using modern technologies to deliver fast, responsive, and scalable websites — tailored to your brand, goals, and audience. From UI design to deployment, we build clean, secure, and high-performing web experiences.",
    gradient: "from-purple-700 to-indigo-500",
  },
  {
    icon: <FaServer />,
    title: "Hosting and Deployment",
    text: "We handle complete hosting and deployment for your website — ensuring it’s secure, live, and optimized for performance. From server setup to domain configuration and ongoing support, we take care of everything so you don’t have to.",
    gradient: "from-violet-600 to-fuchsia-500",
  },
];

const Services = () => {
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
    <section className="w-full pt-25 pb-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium border border-purple-300 text-sm mb-6 bg-purple-100 text-purple-700"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
            <MdDesignServices size={14} />
          </span>
          OUR SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6"
        >
          Unlock Digital Growth with{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Impactful
          </span>{" "}
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg font-medium mb-12"
        >
          Discover how our tailored digital solutions can transform your brand's
          presence, performance, and profit.
        </motion.p>

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

export default Services;
