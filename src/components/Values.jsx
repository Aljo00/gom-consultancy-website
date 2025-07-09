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
    icon: MdFavorite,
    title: "Customer Centric",
    description:
      "Our primary focus is on our clients' needs. We emphasise identifying their specific obstacles and goals, modifying our strategies to offer personalised service.",
  },
  {
    icon: MdPrecisionManufacturing,
    title: "Accuracy",
    description:
      "We are committed to nurturing robust alliances through transparent communication and mutual respect with our clients.",
  },
  {
    icon: MdLightbulbOutline,
    title: "Innovation",
    description:
      "Customer demands are constantly evolving, so we adapt creatively to deliver meaningful value and stay ahead of expectations.",
  },
  {
    icon: MdGavel,
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
      className="w-full py-20 px-6 md:px-12 bg-white"
      id="values"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-300">
          <MdFavorite className="text-purple-500" />
          OUR VALUES
        </span>
      </div>

      {/* Hero Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
        What We{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Stand For
        </span>
      </h2>

      {/* Description */}
      <p className="text-lg text-center text-gray-700 font-medium max-w-2xl mx-auto mb-12">
        We partner with you to craft a successful business model that
        authentically reflects your unique vision while achieving your desired
        conversion goals.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {valuesData.map(({ icon: Icon, title, description }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white border border-purple-200 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
                <Icon size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
            <p className="text-gray-700 font-medium text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Values;
