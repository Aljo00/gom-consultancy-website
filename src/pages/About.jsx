import React, { Suspense, lazy } from "react";
import { MdPerson } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ceoImage from "../assets/CEO.jpg";

// Lazy load heavy components
const Values = lazy(() => import("../components/Values"));
const Team = lazy(() => import("../components/Team"));

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 30 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.5 : 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen pt-24 py-20 px-6 md:px-12 bg-white"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-300">
          <MdPerson size={18} className="text-purple-500" />
          ABOUT US
        </span>
      </div>

      {/* Hero Text */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
        From{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Small Rooms
        </span>{" "}
        to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Big Visions
        </span>
      </h1>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* CEO Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={ceoImage}
            alt="Amal Gopal"
            className="rounded-2xl shadow-lg w-100 h-64 md:w-200 md:h-150 object-cover mb-4"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-purple-800">Amal Gopal</h3>
          <p className="text-gray-600 font-medium">
            CEO, GOM Digital Consultancy
          </p>
        </div>

        {/* Story */}
        <div className="text-gray-800 text-lg leading-relaxed font-medium space-y-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            The Story Behind GOM Digital Consultancy
          </h2>
          <p>
            I began with chaos, confusion, and a relentless drive to figure
            things out. My first YouTube channel in India had no team, no tools,
            and no stable internet just deep curiosity and hunger to grow.
          </p>
          <p>
            Failures were constant videos flopped, clients backed out, and I
            spent countless hours just trying to move forward. But those
            struggles taught me how the digital world truly works not in
            theory, but in the trenches.
          </p>
          <p>
            Eventually, I cracked the code. GOM Digital Consultancy wasn’t just
            born from success it was built from resilience. Our mission: to
            help creators, solopreneurs, and small brands grow smart, human, and
            bold in the digital space.
          </p>
          <p>
            We've supported 100+ creators and brands scaling YouTube channels,
            launching businesses, and driving growth often without paid ads.
          </p>
          <p>
            Today, I lead a global team from Canada with the same values I
            started with: no shortcuts, no inflated promises. Just real results,
            creativity, and care.
          </p>
          <p className="text-purple-700 font-semibold">
            This isn’t just digital growth it’s about building something real.
            And we’re just getting started.
          </p>
        </div>
      </div>

      {/* Lazy load Values and Team with animation fallback */}
      <Suspense
        fallback={
          <div className="text-center py-10 text-purple-500 font-semibold animate-pulse">
            Loading insights...
          </div>
        }
      >
        <Values />
        <Team />
      </Suspense>
    </motion.section>
  );
};

export default About;
