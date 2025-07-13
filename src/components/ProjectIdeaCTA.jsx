import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectIdeaCTA = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Capsule Heading */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-sm">
            <span className="bg-white text-pink-600 p-1 rounded-full">
              <FaEnvelope size={12} />
            </span>
            Ready to Transform?
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Let's Build Something
          <br />
          Amazing Together
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Whether you're starting from scratch or scaling up, we're here to turn
          your vision into powerful digital reality that drives results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact-us"
            className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold text-base shadow-md hover:scale-105 transition"
          >
            Start Your Project →
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 border border-white text-white rounded-full font-semibold text-base hover:bg-white hover:text-purple-600 transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectIdeaCTA;
