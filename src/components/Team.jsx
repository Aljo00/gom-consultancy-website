import React from "react";
import { MdGroup } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import athulImg from "../assets/Members/Athul.jpg";
import riyasImg from "../assets/Members/Riyas.jpg";
import harithaImg from "../assets/Members/Haritha.jpg";
import aljoImg from "../assets/Members/Aljo.jpg";

const teamMembers = [
  {
    name: "Athul",
    position: "Head of Visual Production",
    description:
      "Expert in video production, photography, and visual storytelling, ensuring every frame aligns with the brand’s message and impact.",
    image: athulImg,
  },
  {
    name: "Riyas Kurukkan",
    position: "Chief Operating Officer",
    description:
      "With a sharp focus on execution, strategy, and team coordination, the COO ensures every project runs smoothly on time, on budget, and beyond expectations.",
    image: riyasImg,
  },
  {
    name: "Haritha Jyothi",
    position: "Chief Marketing Officer",
    description:
      "Leads the marketing vision at GOM, blending strategy, creativity, and data to grow brands with impact and authenticity.",
    image: harithaImg,
  },
  {
    name: "Aljo Joju",
    position: "Developer",
    description:
      "Drives the technological backbone of GOM, crafting scalable digital solutions with precision and passion. Blends creativity with code to deliver seamless, user-focused web experiences that reflect the brand’s innovation and excellence.",
    image: aljoImg,
  },
];

// Group in pairs
const chunkArray = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const Team = () => {
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
      id="team"
    >
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-300">
          <MdGroup className="text-purple-600" />
          OUR TEAM
        </span>
      </div>

      {/* Hero Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        The{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Brilliant Minds
        </span>{" "}
        Driving{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Our Success
        </span>
      </h2>

      {/* Subheading */}
      <p className="text-lg text-center text-gray-700 font-medium max-w-2xl mx-auto mb-12">
        We're more than just a service provider; we're a team of passionate
        professionals who are committed to helping you unlock your brand's full
        potential.
      </p>

      {/* Team Cards - 2 per row */}
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        {chunkArray(teamMembers, 2).map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row gap-8 justify-center"
          >
            {row.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 35px rgba(168, 85, 247, 0.25)",
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col md:flex-row gap-6 flex-1 bg-white border border-purple-200 rounded-xl p-6"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full md:w-[240px] h-[240px] object-cover rounded-xl shadow-md"
                />

                {/* Text */}
                <div className="flex flex-col justify-center text-left">
                  <h3 className="text-2xl font-bold text-purple-700">
                    {member.name}
                  </h3>
                  <p className="text-pink-500 font-medium text-sm mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team;
