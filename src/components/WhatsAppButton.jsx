import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919961999873"; // With country code
  const message = encodeURIComponent(
    "Hi! I'm interested in your services. Can we discuss more?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [isTooltipLeft, setIsTooltipLeft] = useState(false);

  useEffect(() => {
    const updateTooltipDirection = () => {
      setIsTooltipLeft(window.innerWidth < 300);
    };

    updateTooltipDirection();
    window.addEventListener("resize", updateTooltipDirection);
    return () => window.removeEventListener("resize", updateTooltipDirection);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition duration-300 animate-bounce-custom"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping-custom" />
        <FaWhatsapp size={28} className="z-10" />

        {/* Tooltip */}
        <span
          className={`absolute bottom-14 ${
            isTooltipLeft ? "right-0" : "right-1/2 translate-x-1/2"
          } opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-3 py-1 rounded-md transition-all duration-200 whitespace-nowrap max-w-[200px] text-center`}
        >
          Chat with us on WhatsApp
        </span>
      </a>

      {/* 🔧 Animation keyframes */}
      <style>
        {`
          @keyframes bounce-custom {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10%);
            }
          }

          .animate-bounce-custom {
            animation: bounce-custom 1.4s infinite ease-in-out;
          }

          @keyframes ping-custom {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            70% {
              transform: scale(1.6);
              opacity: 0;
            }
            100% {
              transform: scale(1.6);
              opacity: 0;
            }
          }

          .animate-ping-custom {
            animation: ping-custom 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppButton;
