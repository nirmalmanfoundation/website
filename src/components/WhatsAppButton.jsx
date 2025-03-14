import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Animated Ring (Now does not block clicks) */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-green-700 opacity-30 pointer-events-none"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />

      {/* WhatsApp Button (Now Fully Clickable) */}
      <a
        href="https://chat.whatsapp.com/IjGzImCRcsWEDMnPBlu3s9"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full shadow-lg text-white text-3xl transition-transform hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;


