import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import samsung from "../assets/logo/samsung.png"
import benq from "../assets/logo/benq.png"
import amd from "../assets/logo/amd.png"

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopup = () => setIsVisible(true);

  useEffect(() => {
    showPopup(); // Show on first load

    const interval = setInterval(() => {
      showPopup();
    }, 900000); // 15 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Background Blur with Gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[998]"
          />

          {/* Modern Popup Banner */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
            }}
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] w-full max-w-md mx-4"
          >
            {/* Glassmorphism Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-all duration-200 group cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Main Content */}
              <div className="relative z-10">
                {/* Icon/Badge */}
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-2 leading-tight">
                  Establish your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    digital presence
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-center text-gray-600 text-sm mb-8 leading-relaxed">
                  Create a strong media footprint by achieving your desired
                  conversion goals.
                </p>

                {/* WhatsApp Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mb-6"
                >
                  <a
                    href="https://wa.me/+14379084422?text=Hi%2C%20I'm%20interested%20in%20growing%20my%20digital%20presence%20with%20GOM%20Digital%20Consultancy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-2xl text-base hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <svg
                      className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                    </svg>
                    Talk with Expert
                  </a>
                </motion.div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden shadow-md">
                      <img
                        src={samsung}
                        alt="Samsung"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden shadow-md">
                      <img
                        src={benq}
                        alt="BenQ"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden shadow-md">
                      <img
                        src={amd}
                        alt="Nothing"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    100+ Happy Clients
                  </span>
                </div>

                {/* Footer text */}
                <p className="text-xs text-center text-gray-500 leading-relaxed">
                  Thanks for choosing GOM — we're excited to help you grow!
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;