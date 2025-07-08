import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { MdPerson } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const stats = [
  { label: "Projects Completed", value: 541, suffix: "+" },
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
  { label: "Client Support", value: "24x7", isStatic: true },
  { label: "Clients", value: 100, suffix: "+" },
];

const AboutStatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full px-4 md:px-20 bg-[#f0fdff] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* 🔹 Top Badge */}
        <p className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium border border-blue-300 mb-6 text-sm">
          <span className="bg-blue-600 text-white p-1 rounded-full">
            <MdPerson size={14} />
          </span>
          ABOUT OUR AGENCY
        </p>

        {/* 🔹 Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          Helping You Build a{" "}
          <span className="text-blue-600">Powerful Brand</span> <br />
          Through <span className="text-blue-600">Strategy & Execution</span>
        </h2>

        {/* 🔹 Paragraph */}
        <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium mb-12">
          We blend creativity and strategy to deliver real results. From brand
          building to customer acquisition, we help you stand out and grow
          faster.
        </p>

        {/* 🔹 Updated Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-black">
                {stat.isStatic
                  ? stat.value
                  : inView && <CountUp end={stat.value} duration={2} />}
                {!stat.isStatic && stat.suffix}
              </h3>
              <p className="text-lg font-medium text-black mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 CTA Button */}
        <Link
          to="/about"
          className="group inline-flex items-center justify-center bg-blue-600 hover:bg-black text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 overflow-hidden hover:px-8"
        >
          <span className="transform group-hover:-translate-x-1 transition-all duration-300">
            Get Started
          </span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutStatsSection;
