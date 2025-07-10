import React from "react";
import { MdVerifiedUser } from "react-icons/md";

// Logos
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
import vguard from "../assets/logo/vguard.png";
import atomberg from "../assets/logo/atomberg.png";
import toshiba from "../assets/logo/toshiba.png";
import impex from "../assets/logo/impex.png";
import luluconnect from "../assets/logo/lulu-connect.png";
import tvs from "../assets/logo/tvs.png";

// Row 1 Clients
const clientsRow1 = [
  oneplus,
  nothing,
  tcl,
  intel,
  oxygen,
  west80,
  amd,
  benq,
  samsung,
];

// Row 2 Clients (New List)
const clientsRow2 = [
  vguard,
  atomberg,
  toshiba,
  impex,
  luluconnect,
  tvs,
  reliance,
  oppo,
];

const ClientsMarquee = () => {
  const repeatedRow1 = [...clientsRow1, ...clientsRow1];
  const repeatedRow2 = [...clientsRow2, ...clientsRow2];

  return (
    <section className="py-16 overflow-hidden w-full relative bg-white">
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

      {/* 🔷 Capsule Heading */}
      <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium border border-purple-300 mb-6 text-sm bg-purple-100 text-purple-700">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded-full">
          <MdVerifiedUser size={14} />
        </span>
        OUR TRUSTED CLIENTS
      </p>

      {/* 🔁 Row 1 - Left Scroll */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-10 w-[200%] scrolling-row pause-on-hover">
          {repeatedRow1.map((logo, index) => (
            <img
              key={`row1-${index}`}
              src={logo}
              alt={`Client ${index}`}
              className="h-12 sm:h-16 object-contain transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* 🔁 Row 2 - Right Scroll */}
      <div className="overflow-hidden w-full mt-20">
        <div className="flex gap-10 w-[200%] scrolling-row-reverse pause-on-hover">
          {repeatedRow2.map((logo, index) => (
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
