import React from "react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const ProjectIdeaCTA = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#e0f2ff] to-[#f7fbff] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-white opacity-30 rounded-t-3xl shadow-inner" />

      <div className="relative z-10 max-w-4xl text-center py-16">
        {/* Capsule Heading */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 border border-blue-300 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
            <FaEnvelope className="text-blue-600" />
            CONTACT US
          </span>
        </div>

        {/* Hero Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Have a Vision for Your Next{" "}
          <span className="text-blue-600">Digital Project</span>?
          <br />
          <span className="text-blue-600">Let's Bring It to Life!</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10">
          Whether you're starting from scratch or scaling big — we help you turn
          your ideas into powerful, high-performing digital solutions.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
        >
          Get In Touch <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default ProjectIdeaCTA;
