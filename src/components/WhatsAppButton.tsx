import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from './constants';

const WhatsAppButton: React.FC = () => {
    return (
        <button
            onClick={() => openWhatsApp()}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 font-semibold text-white transition-all duration-300 transform-gpu
            bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-lg animate-pulse
            hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300"
        >
            <FaWhatsapp className="h-7 w-7" />
            <span className="text-lg">Vous avez besoin d'aide ?</span>
        </button>
    );
};

export default WhatsAppButton;
