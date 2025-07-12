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
  UserCircle,
  FileText,
  Settings,
  Search,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  {
    icon: <User className="w-8 h-8" />,
    title: "Personal Branding & Social Media Growth",
    text: "Build your personal brand with custom strategies across platforms, defining your voice and establishing authority.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Branding & Storytelling",
    text: "Create strong brand impact with unique storytelling and visual merchandising that resonates emotionally with your audience.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production & Ads",
    text: "High-quality video content and ad creatives that captivate, communicate, and convert from script to screen.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Influencer & UGC Marketing",
    text: "Connect with trusted creators and curate authentic user-generated content that drives awareness, trust, and sales.",
    gradient: "from-teal-500 to-blue-500"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Strategic Content Creation",
    text: "Plan, create, and distribute content that aligns with your business goals and performs across platforms.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: <UserCircle className="w-8 h-8" />,
    title: "Personal Portfolio",
    text: "Tailored portfolio websites that showcase your skills and experience in a clean, modern layout to help you stand out.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Landing Pages",
    text: "Conversion-focused landing pages designed to capture leads and drive traffic effectively with clear CTAs.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "CMS Integration",
    text: "Integration of headless CMS platforms like Sanity or WordPress to make content management effortless and dynamic.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full Website Development",
    text: "End-to-end development of fully responsive, fast-loading websites using modern tech stacks and backend integration.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Hosting & Deployment",
    text: "Secure hosting and seamless deployment setup with platforms like Vercel, Netlify, plus after-deployment support.",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO-Friendly Development",
    text: "Implementation of SEO best practices including structured data, fast performance, and responsive mobile-first design.",
    gradient: "from-lime-500 to-green-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Custom Website Solutions",
    text: "Highly customized websites tailored to your unique goals featuring interactive elements, animations, and integrations.",
    gradient: "from-fuchsia-500 to-purple-500"
  },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div className="min-h-screen pt-16 bg-white">
      <section ref={ref} className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
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
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Digital
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Solutions Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital services that transform 
              your business and accelerate growth in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
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

                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;