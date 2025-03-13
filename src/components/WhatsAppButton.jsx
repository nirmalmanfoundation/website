import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://chat.whatsapp.com/IjGzImCRcsWEDMnPBlu3s9"
      target="_blank"
      rel="noopener noreferrer"
      className="z-10 fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 z-50"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
