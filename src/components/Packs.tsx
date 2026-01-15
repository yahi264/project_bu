import React from "react";
import {
  FaFlask,
  FaLeaf,
  FaCalculator,
  FaAtom,
  FaSeedling,
  FaLanguage,
  FaBrain,
  FaMosque,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { openWhatsApp } from "./constants";

interface Pack {
  title: string;
  description: string;
  subjects: string[];
  color: string;
}

const subjectIcons: { [key: string]: React.ElementType } = {
  math: FaCalculator,
  pc: FaAtom,
  svt: FaSeedling,
  en: FaLanguage,
  ph: FaBrain,
  islamic: FaMosque,
};

const Packs: React.FC = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = (packTitle: string) => {
    openWhatsApp(`Bonjour, je veux m'inscrire dans ce plans de "${packTitle}"`);
  };

  const packsData = [
    {
      id: "pc_basic",
      title: "PC - Basic",
      subjects: ["math", "pc"],
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      id: "pc_gold",
      title: "PC - Gold",
      subjects: ["math", "pc", "svt"],
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      id: "pc_premium",
      title: "PC - Premium",
      subjects: ["math", "pc", "svt", "en", "ph"],
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      id: "svt_basic",
      title: "SVT - Basic",
      subjects: ["math", "svt"],
      color: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      id: "svt_gold",
      title: "SVT - Gold",
      subjects: ["math", "pc", "svt"],
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      id: "svt_premium",
      title: "SVT - Premium",
      subjects: ["math", "svt", "pc", "en", "ph"],
      color: "bg-gradient-to-r from-green-400 to-cyan-500",
    },
  ];

  const packs: Pack[] = packsData.map(p => ({
    ...p,
    description: t(`packs.items.${p.id}.description`),
    subjects: p.subjects.map(s => t(`packs.subjects.${s}`)),
  }));

  return (
    <section id="packs" className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">
          {t('packs.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack, index) => {
            const isPremium = pack.title.includes("Premium");
            const isGold = pack.title.includes("Gold");
            const isBasic = pack.title.includes("Basic");

            let price = 0;
            if (isBasic) price = 299;
            if (isGold) price = 399;
            if (isPremium) price = 499;

            const premiumClasses = isPremium
              ? "border-4 border-purple-400 hover:border-purple-300 shadow-[0_0_20px_theme(colors.purple.400)] hover:scale-110"
              : "hover:scale-105";

            return (
              <div
                key={index}
                className={`${pack.color} rounded-xl p-6 relative overflow-hidden transform transition duration-300 ${premiumClasses} shadow-2xl flex flex-col`}
              >
                {/* decorative corner accent - moved to the back */}
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/6 blur-3xl pointer-events-none"></div>

                {/* soft inner dark overlay for contrast (keeps colors but improves readability) */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-xl backdrop-blur-md"></div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-2xl font-semibold mb-3 text-center flex items-center justify-center gap-2 text-white">
                    {pack.title.includes("PC") ? <FaFlask /> : <FaLeaf />}
                    {pack.title}
                  </h3>

                  <p className="mb-6 text-sm md:text-base text-white leading-relaxed">
                    {pack.description}
                  </p>

                  {/* Subjects: no white rectangles — just icon + text */}
                  <ul className="space-y-3 mb-6">
                    {pack.subjects.map((subject, idx) => {
                      const subjectKey = packsData[index].subjects[idx];
                      const Icon = subjectIcons[subjectKey];
                      let hours = "";
                      if (
                        subjectKey === "math" ||
                        subjectKey === "pc" ||
                        subjectKey === "svt"
                      ) {
                        hours = "4h/semaine";
                      } else if (
                        subjectKey === "en" ||
                        subjectKey === "ph"
                      ) {
                        hours = "1h/semaine";
                      }
                      return (
                        <li
                          key={idx}
                          className="group flex items-center justify-between gap-3 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            {Icon && (
                              <Icon
                                className="w-5 h-5 text-white flex-shrink-0 group-hover:text-purple-400 transition-colors duration-200"
                                aria-hidden
                              />
                            )}
                            <span className="text-white font-medium transition-colors duration-200">
                              {subject}
                            </span>
                          </div>
                          {hours && (
                            <span className="text-white text-sm font-light">
                              {hours}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex-grow"></div>

                  {/* CTA or price area */}
                  <div className="text-center">
                    <div className="mb-4 text-white">
                      <span className="text-3xl font-bold">{price}</span>
                      <span className="text-lg font-medium"> MAD</span>
                    </div>
                    <button 
                      onClick={() => handleWhatsAppClick(pack.title)}
                      className="w-full mb-2 px-6 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    >
                      {t('packs.signUp')}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packs;