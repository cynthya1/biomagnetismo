import React from 'react';
// Removed: import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '51972700890'; // Country code + number without '+' or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton; 