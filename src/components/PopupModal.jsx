import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, MessageCircle } from "lucide-react";

import samsung from "../assets/logo/samsung.png";
import benq from "../assets/logo/benq.png";
import amd from "../assets/logo/amd.png";

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => setIsVisible(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      showPopup();
    }, 3000); // Show after 3 seconds

    const interval = setInterval(() => {
      showPopup();
    }, 900000); // Show every 15 minutes

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
            onClick={() => setIsVisible(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Grow Your
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Digital Presence?
                  </span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Join 100+ successful brands who trust us to transform their digital strategy 
                  and achieve remarkable growth.
                </p>

                {/* CTA Button */}
                <a
                  href="https://wa.me/+14379084422?text=Hi%2C%20I'm%20interested%20in%20growing%20my%20digital%20presence%20with%20GOM%20Digital%20Consultancy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mb-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Free Consultation
                </a>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    {[samsung, benq, amd].map((logo, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-sm"
                      >
                        <img
                          src={logo}
                          alt="client logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    100+ Happy Clients
                  </span>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-500">
                  No spam, just valuable insights to grow your business
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;