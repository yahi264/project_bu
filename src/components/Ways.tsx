import React from "react";
import { User, Calendar, CreditCard, CheckCircle2, Package } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

interface Step {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const icons: { [key: string]: React.ReactNode } = {
  user: <User className="w-6 h-6" />,
  calendar: <Calendar className="w-6 h-6" />,
  card: <CreditCard className="w-6 h-6" />,
  check: <CheckCircle2 className="w-6 h-6" />,
  package: <Package className="w-6 h-6" />,
};

export default function Ways() {
  const { t } = useTranslation();

  const stepsData = [
    { id: 1, icon: "user" },
    { id: 2, icon: "calendar" },
    { id: 3, icon: "card" },
    { id: 4, icon: "check" },
    { id: 5, icon: "package" },
  ];

  const steps: Step[] = stepsData.map(s => ({
    ...s,
    title: t(`ways.steps.${s.id}.title`),
    desc: t(`ways.steps.${s.id}.desc`),
    icon: icons[s.icon],
  }));

  return (
    <section id="method" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            <Trans i18nKey="ways.title">
              Méthode <span className="text-indigo-600">100% en ligne</span>
            </Trans>
          </h2>
          <p className="mt-3 text-gray-600">
            {t('ways.subtitle')}
          </p>
        </header>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            style={{ originX: 0 }}
            className="absolute left-8 right-8 top-1/2 transform -translate-y-1/2 h-1 bg-gray-200 rounded-full"
          />

          <div className="flex items-center justify-between space-x-12">
            {steps.map((s, idx) => (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative z-10 flex-1 text-center"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-indigo-500 shadow-sm">
                  <div className="text-indigo-600">{s.icon}</div>
                </div>

                <div className="mt-20">
                  <h3 className="font-semibold text-gray-800">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
                </div>

                {/* step number on the line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-indigo-500/50">
                  <span className="font-bold text-sm text-indigo-600">{s.id}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <ol className="relative border-l border-gray-200 pl-6">
            {steps.map((s, idx) => (
              <li key={s.id} className="mb-10 ml-4">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-white">
                  <span className="text-white">{s.id}</span>
                </span>
                <div className="flex items-start gap-5">
                  <div className="mt-1 text-indigo-600 ml-4">{s.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{s.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#packs"
            className="inline-block px-6 py-2 rounded-md bg-indigo-600 text-white font-medium shadow hover:opacity-95"
          >
            {t('ways.seePacks')}
          </a>
        </div>
      </div>
    </section>
  );
}