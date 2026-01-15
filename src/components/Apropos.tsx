import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Heart } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const icons: { [key: string]: React.ReactNode } = {
  mission: <GraduationCap className="w-7 h-7" />,
  vision: <Target className="w-7 h-7" />,
  values: <Heart className="w-7 h-7" />,
};

export default function Apropos() {
  const { t } = useTranslation();
  const aboutItems = t('about.items', { returnObjects: true });
  const founders = t('about.founders.items', { returnObjects: true });

  return (
    <section id="apropos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            <Trans i18nKey="about.title">
              À propos de <span className="text-indigo-600">nous</span>
            </Trans>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </header>

        {/* Mission / Vision / Valeurs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {Array.isArray(aboutItems) && aboutItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                {icons[item.icon]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#packs"
            className="inline-block px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:opacity-95 transition"
          >
            {t('about.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}