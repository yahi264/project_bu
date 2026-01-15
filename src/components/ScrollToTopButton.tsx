import React, { useState, useEffect, useCallback } from 'react';
import { ChevronUp } from 'lucide-react'; // Assuming lucide-react is available for icons

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to 200px
    const toggleVisibility = useCallback(() => {
        if (window.pageYOffset > 200) { // Appear after 200px scroll
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [toggleVisibility]);

    // Scroll to top logic
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 left-8 z-50 p-4 rounded-full shadow-lg cursor-pointer
                bg-indigo-600 text-white transition-opacity duration-300
                hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            aria-label="Scroll to top"
        >
            <ChevronUp className="h-6 w-6" />
        </button>
    );
};

export default ScrollToTopButton;
