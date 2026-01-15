import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useTranslation, Trans } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => [
    {
      id: 1,
      content: (
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <Trans i18nKey="home.title">
              Construis ton avenir avec
              <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                AlphaMind Academy
              </span>
            </Trans>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a
              href="#packs"
              className="px-8 py-4 rounded-xl font-semibold text-white
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:scale-105 hover:shadow-xl transition"
            >
              🎓 {t('home.discoverPacks')}
            </a>
            <a
              href="#method"
              className="px-8 py-4 rounded-xl font-semibold border
              border-gray-300
              hover:bg-gray-100 transition"
            >
              📘 {t('home.ourMethod')}
            </a>
          </div>
        </section>
      )
    },
    {
      id: 2,
      content: (
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {t('home.slide2.title', 'Libérez Votre Potentiel')}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              {t('home.slide2.subtitle', 'Nos méthodes innovantes et nos tuteurs experts sont là pour vous guider vers le succès.')}
            </p>
            <div className="mt-10 flex justify-center md:justify-start gap-6 flex-wrap">
              <a
                href="#packs"
                className="px-8 py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:scale-105 hover:shadow-xl transition"
              >
                🎓 {t('home.discoverPacks')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 max-h-[60vh] overflow-hidden flex items-center justify-center">
            <img src="/images/second.png" alt="Innovative learning" className="rounded-lg shadow-2xl w-full h-full object-cover" />
          </div>
        </section>
      )
    },
    {
      id: 3,
      content: (
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-20 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {t('home.slide3.title', 'Votre parcours vers le succès commence ici')}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              {t('home.slide3.subtitle', 'Des parcours d\'apprentissage personnalisés, des éducateurs expérimentés et une communauté solidaire vous attendent.')}
            </p>
            <div className="mt-10 flex justify-center md:justify-start gap-6 flex-wrap">
              <a
                href="#packs"
                className="px-8 py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:scale-105 hover:shadow-xl transition"
              >
                🎓 {t('home.discoverPacks')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 max-h-[60vh] overflow-hidden flex items-center justify-center">
            <img src="/images/third.png" alt="Journey to success" className="rounded-lg shadow-2xl w-full h-full object-cover" />
          </div>
        </section>
      )
    }
  ], [t]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useInterval(
    handleNext,
    !isPaused ? 5000 : null
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleManualNavigation = (navFunction: () => void) => {
    setIsPaused(true);
    navFunction();
    setTimeout(() => {
      setIsPaused(false);
    }, 5000); // Pause for 5 seconds after manual navigation
  };


  return (
    <main 
      id="accueil" 
      className="relative overflow-hidden bg-white text-gray-900 min-h-[80vh] justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Background effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute w-full h-full"
        >
          <div className="h-full flex items-center justify-center">
            {slides[currentIndex].content}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-20">
        <button
          onClick={() => handleManualNavigation(handlePrev)}
          className="p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={() => handleManualNavigation(handleNext)}
          className="p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

    </main>
  );
};

export default Home;