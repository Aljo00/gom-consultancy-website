import React from "react";
import {
  MdFavorite,
  MdPrecisionManufacturing,
  MdLightbulbOutline,
  MdGavel,
} from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const valuesData = [
  {
    icon: <MdFavorite size={28} className="text-blue-600" />,
    title: "Customer Centric",
    description:
      "Our primary focus is on our clients' needs. We emphasise identifying their specific obstacles and goals, modifying our strategies to offer personalised service.",
  },
  {
    icon: <MdPrecisionManufacturing size={28} className="text-blue-600" />,
    title: "Accuracy",
    description:
      "We are committed to nurturing robust alliances through transparent communication and mutual respect with our clients.",
  },
  {
    icon: <MdLightbulbOutline size={28} className="text-blue-600" />,
    title: "Innovation",
    description:
      "Customer demands are constantly evolving, so we adapt creatively to deliver meaningful value and stay ahead of expectations.",
  },
  {
    icon: <MdGavel size={28} className="text-blue-600" />,
    title: "Maintaining Simplicity",
    description:
      "We prioritize ethical standards, transparency, and authenticity. Simplicity is at the heart of everything we do.",
  },
];

const Values = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-20 px-6 md:px-12 bg-gradient-to-bl from-[#f0faff] to-[#e6f4ff]"
      id="values"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-300">
          <MdFavorite className="text-blue-600" />
          OUR VALUES
        </span>
      </div>

      {/* Hero Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
        What We <span className="text-blue-600">Stand For</span>
      </h2>

      {/* Description */}
      <p className="text-lg text-center text-gray-700 font-medium max-w-2xl mx-auto mb-12">
        We partner with you to craft a successful business model that
        authentically reflects your unique vision while achieving your desired
        conversion goals.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {valuesData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-100 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Values;
