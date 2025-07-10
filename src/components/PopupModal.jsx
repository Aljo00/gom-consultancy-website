import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const PopupBanner = () => {
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
          {/* 🔹 Background Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-[998]"
          />

          {/* 🔹 Popup Banner */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "1.5rem", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed left-1/2 transform -translate-x-1/2 z-[999] w-full max-w-2xl rounded-2xl bg-white px-6 py-8 shadow-2xl border border-purple-200"
          >
            {/* ❌ Close */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-pink-500 cursor-pointer"
            >
              <IoMdClose size={22} />
            </button>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2 whitespace-nowrap">
              Establish your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                digital presence
              </span>{" "}
              with us!
            </h2>

            {/* Underline */}
            <div className="w-24 h-[3px] mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>

            {/* Subtext */}
            <p className="text-center text-gray-700 font-medium text-base mb-6 px-2">
              Create a strong media footprint by achieving your desired
              conversion goals.
            </p>

            {/* WhatsApp Button */}
            <div className="text-center mb-4">
              <a
                href="https://wa.me/+14379084422?text=Hi%2C%20I'm%20interested%20in%20growing%20my%20digital%20presence%20with%20GOM%20Digital%20Consultancy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full text-base hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <FaWhatsapp size={20} />
                Talk with Expert
              </a>
            </div>

            {/* Footer text */}
            <p className="text-sm text-center text-gray-500 font-medium">
              Thanks for choosing GOM — we're excited to help you grow!
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupBanner;
