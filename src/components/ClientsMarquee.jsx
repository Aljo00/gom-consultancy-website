import React from "react";
import { Shield } from "lucide-react";

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

const allClients = [
  oneplus, nothing, tcl, intel, oxygen, west80, amd, benq, samsung,
  reliance, oppo, vguard, atomberg, toshiba, impex, luluconnect, tvs
];

const ClientsMarquee = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
          <Shield className="w-4 h-4 mr-2" />
          Trusted Partners
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Brands That Trust Our
          <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Digital Expertise
          </span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From startups to Fortune 500 companies, we've helped brands across industries 
          achieve their digital transformation goals.
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        <div className="flex space-x-8 animate-scroll">
          {[...allClients, ...allClients].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={logo}
                alt={`Client ${index}`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(200% + 2rem);
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;