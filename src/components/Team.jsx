import React from "react";
import { Users } from "lucide-react";
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
    description: "Expert in video production, photography, and visual storytelling, ensuring every frame aligns with the brand's message and impact.",
    image: athulImg,
  },
  {
    name: "Riyas Kurukkan",
    position: "Chief Operating Officer",
    description: "With a sharp focus on execution, strategy, and team coordination, the COO ensures every project runs smoothly on time, on budget, and beyond expectations.",
    image: riyasImg,
  },
  {
    name: "Haritha Jyothi",
    position: "Chief Marketing Officer",
    description: "Leads the marketing vision at GOM, blending strategy, creativity, and data to grow brands with impact and authenticity.",
    image: harithaImg,
  },
  {
    name: "Aljo Joju",
    position: "Developer",
    description: "Drives the technological backbone of GOM, crafting scalable digital solutions with precision and passion. Blends creativity with code to deliver seamless, user-focused web experiences.",
    image: aljoImg,
  },
];

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

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
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet The
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative Minds
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together creativity, strategy, and technical excellence 
            to deliver exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full md:w-48 h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {member.position}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;