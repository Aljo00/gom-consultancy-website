import React from "react";
import { MdPerson } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ceoImage from "../assets/CEO.jpg"; //
import Values from "../components/Values";
import Team from "../components/Team";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen pt-25 py-20 px-6 md:px-12 bg-gradient-to-br from-[#e6f4ff] to-[#f7fbff]"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-300">
          <MdPerson size={18} className="text-blue-600" />
          ABOUT US
        </span>
      </div>

      {/* Hero Text */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight">
        From <span className="text-blue-600 font-bold">Small Rooms</span> to{" "}
        <span className="text-blue-600 font-bold">Big Visions</span>
      </h1>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: CEO Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={ceoImage}
            alt="Amal Gopal"
            className="rounded-2xl shadow-lg w-100 h-64 md:w-200 md:h-150 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800">Amal Gopal</h3>
          <p className="text-gray-600 font-medium">
            CEO, GOM Digital Consultancy
          </p>
        </div>

        {/* Right Side: Story */}
        <div className="text-gray-800 text-lg leading-relaxed font-medium space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            The Story Behind GOM Digital Consultancy
          </h2>
          <p>
            I began with chaos, confusion, and a relentless drive to figure
            things out. My first YouTube channel in India had no team, no tools,
            and no stable internet — just deep curiosity and hunger to grow.
          </p>
          <p>
            Failures were constant — videos flopped, clients backed out, and I
            spent countless hours just trying to move forward. But those
            struggles taught me how the digital world truly works — not in
            theory, but in the trenches.
          </p>
          <p>
            Eventually, I cracked the code. GOM Digital Consultancy wasn’t just
            born from success — it was built from resilience. Our mission: to
            help creators, solopreneurs, and small brands grow smart, human, and
            bold in the digital space.
          </p>
          <p>
            We've supported 100+ creators and brands — scaling YouTube channels,
            launching businesses, and driving growth — often without paid ads.
          </p>
          <p>
            Today, I lead a global team from Canada with the same values I
            started with: no shortcuts, no inflated promises. Just real results,
            creativity, and care.
          </p>
          <p className="text-blue-700 font-semibold">
            This isn’t just digital growth — it’s about building something real.
            And we’re just getting started.
          </p>
        </div>
      </div>

      <Values />

      <Team />
    </motion.section>
  );
};

export default About;
