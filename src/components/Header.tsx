import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { openWhatsApp } from "./constants";

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const handleWhatsAppClick = () => {
        openWhatsApp("bonjour je veux m'inscrire avec vous, quels sont votre plans ?");
    };

    return (
        <>
            <header className="w-full bg-white/95 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b-2 border-indigo-200/30 shadow-xl shadow-gray-200/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                                <img src="/images/logo.png" alt="Logo" className="h-14 w-14 object-contain hover:rotate-6 transition-transform duration-300" />
                            </a>
                        </div>
                        <nav className="hidden lg:flex space-x-8 items-center">
                            <a href="#accueil" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-110 font-medium">{t('header.home')}</a>
                            <a href="#packs" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-110 font-medium">{t('header.packs')}</a>
                            <a href="#method" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-110 font-medium">{t('header.method')}</a>
                            <a href="#apropos" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-110 font-medium">{t('header.about')}</a>
                            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-110 font-medium">{t('header.contact')}</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100 transition-all duration-300 cursor-pointer"
                                aria-label="Toggle menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => changeLanguage(i18n.language === 'fr' ? 'ar' : 'fr')}
                                    aria-label="Toggle language"
                                    className="p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-indigo-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                                >
                                    {i18n.language === 'fr' ? 'FR' : 'AR'}
                                </button>
                            </div>
                            <button
                                onClick={handleWhatsAppClick}
                                className="hidden lg:inline-flex ml-2 items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                            >
                                🎓 {t('header.signUp')}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className="lg:hidden fixed inset-0 z-60" onClick={() => setMenuOpen(false)}>
                    <div className="absolute top-20 left-0 w-full bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <span className="font-semibold text-lg">{t('header.menu')}</span>
                            <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4 p-4">
                            <a href="#accueil" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium" onClick={() => setMenuOpen(false)}>{t('header.home')}</a>
                            <a href="#packs" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium" onClick={() => setMenuOpen(false)}>{t('header.packs')}</a>
                            <a href="#method" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium" onClick={() => setMenuOpen(false)}>{t('header.method')}</a>
                            <a href="#apropos" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium" onClick={() => setMenuOpen(false)}>{t('header.about')}</a>
                            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium" onClick={() => setMenuOpen(false)}>{t('header.contact')}</a>
                            <button
                                onClick={() => {
                                    handleWhatsAppClick();
                                    setMenuOpen(false);
                                }}
                                className="inline-flex ml-2 items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                            >
                                🎓 {t('header.signUp')}
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};
export default Header;
