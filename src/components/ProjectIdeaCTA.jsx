import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectIdeaCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 max-w-4xl text-center py-16">
        {/* 🔹 Capsule Heading */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 border border-purple-300 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
              <FaEnvelope size={14} />
            </span>
            CONTACT US
          </span>
        </div>

        {/* 🔹 Hero Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Have a Vision for Your Next{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Digital Project
          </span>
          ?
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let's Bring It to Life!
          </span>
        </h2>

        {/* 🔹 Subtext */}
        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10">
          Whether you're starting from scratch or scaling big — we help you turn
          your ideas into powerful, high-performing digital solutions.
        </p>

        {/* 🔹 CTA Button */}
        <Link
          to="/contact-us"
          className="group inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-transparent hover:text-purple-600 transition-all duration-300 relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-full"></span>
          <span className="relative z-10 flex items-center">
            <span className="transform group-hover:-translate-x-1 transition-all duration-300">
              Get In Touch
            </span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectIdeaCTA;
