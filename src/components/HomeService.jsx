import React from "react";
import {
  Megaphone,
  Youtube,
  Rocket,
  TrendingUp,
  Globe,
  Palette,
  User,
  MessageSquare,
  Video,
  Users,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Content & Social Media Marketing",
    text: "Strategic content creation and social media management that builds communities and drives engagement across all platforms.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Youtube className="w-8 h-8" />,
    title: "YouTube Automation & Management",
    text: "Complete YouTube channel management from content planning to analytics, helping you scale your presence effortlessly.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "YouTube Growth Strategy",
    text: "Data-driven growth strategies tailored to your niche, maximizing reach, subscribers, and monetization opportunities.",
    gradient: "from-purple-600 to-blue-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Marketing & Sales Generation",
    text: "Performance marketing campaigns that convert leads into customers through strategic funnels and targeted advertising.",
    gradient: "from-green-500 to-blue-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    text: "Modern, responsive websites that tell your brand story and convert visitors into customers with seamless user experiences.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    text: "Intuitive design solutions that enhance user experience and create meaningful interactions across all digital touchpoints.",
    gradient: "from-pink-500 to-purple-500"
  },
];

const HomeServices = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              That Drive Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end digital services that transform 
            your business and accelerate growth in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.text}
              </p>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Services</span>
            <Rocket className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;