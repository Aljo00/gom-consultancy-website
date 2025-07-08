import React from "react";
import { MdVerifiedUser } from "react-icons/md";

import oneplus from "../assets/logo/oneplus.png";
import nothing from "../assets/logo/nothing.png";
import tcl from "../assets/logo/tcl.png";
import intel from "../assets/logo/intel.png";
import oxygen from "../assets/logo/oxygen.png";
import west80 from "../assets/logo/west80.png";
import amd from "../assets/logo/amd.png";
import benq from "../assets/logo/benq.png";
import samsung from "../assets/logo/samsung.png";
import reliance from "../assets/logo/reliance.png";
import oppo from "../assets/logo/oppo.png";

const logos = [
  oneplus,
  nothing,
  tcl,
  intel,
  oxygen,
  west80,
  amd,
  benq,
  samsung,
  reliance,
  oppo,
];

const ClientsMarquee = () => {
  const repeated = [...logos, ...logos];

  return (
    <section className="bg-white py-12 pb-20 pt-20 overflow-hidden w-full relative">
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .scrolling-row {
            animation: scrollLeft 30s linear infinite;
          }

          .scrolling-row-reverse {
            animation: scrollRight 30s linear infinite;
          }

          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* 🔷 Capsule Badge */}
      <div className="text-center mb-8">
        <p className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium border border-blue-300 text-sm">
          <MdVerifiedUser size={16} className="text-blue-600" />
          OUR TRUSTED CLIENTS
        </p>
      </div>

      {/* 🔁 Row 1 (left scroll) */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-10 w-[200%] scrolling-row pause-on-hover">
          {repeated.map((logo, index) => (
            <img
              key={`row1-${index}`}
              src={logo}
              alt={`Client ${index}`}
              className="h-12 sm:h-16 object-contain transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* 🔁 Row 2 (right scroll, now fixed) */}
      <div className="overflow-hidden w-full mt-8">
        <div className="flex gap-10 w-[200%] scrolling-row-reverse pause-on-hover">
          {repeated.map((logo, index) => (
            <img
              key={`row2-${index}`}
              src={logo}
              alt={`Client ${index}`}
              className="h-12 sm:h-16 object-contain transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
