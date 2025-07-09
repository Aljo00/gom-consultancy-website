import React from "react";
import { MdGroup } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image imports
import athulImg from "../assets/Members/Athul.jpg";
import riyasImg from "../assets/Members/Riyas.jpg";
import harithaImg from "../assets/Members/Haritha.jpg";

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
];

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

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-purple-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-100 object-cover rounded-xl mb-4 shadow-md"
            />
            <h3 className="text-xl font-bold text-purple-700">{member.name}</h3>
            <p className="text-purple-500 font-medium text-sm mb-2">
              {member.position}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team;
