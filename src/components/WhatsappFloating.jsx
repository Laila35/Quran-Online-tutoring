import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsappFloating() {
  return (
    <>
      <a
        href="https://wa.me/19144550557"
        className="fixed bottom-5 right-8 z-50 bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
    </>
  );
}

export default WhatsappFloating;
