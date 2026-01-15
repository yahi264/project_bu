import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next"; // Import useTranslation and Trans
import { openWhatsApp, CONTACT_INFO } from "./constants";

export default function ContactUs() {
  const { t } = useTranslation(); // Initialize useTranslation


  // helper to build wa.me links: remove non digits and leading +
  const toWaLink = (raw: string) => {
    const digits = raw.replace(/\D+/g, "");
    return `https://wa.me/${digits}`;
  };

  return (
    <section id="contact" className="bg-gray-50 text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Large logo */}
          <motion.img
            src="/images/logo.png"
            alt="Logo - version large"
            className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-lg shadow-lg bg-white p-3"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <Trans i18nKey="contact.title">
                Contacte-nous — <span className="text-indigo-600">Nous répondons vite</span>
              </Trans>
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              {t('contact.subtitle')}
            </p>
          </div>
        </header>

        {/* Contact grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Emails card */}
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{t('contact.emailsTitle')}</h3>
                <p className="text-sm text-gray-600">{t('contact.emailsDescription')}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.emailAddress}`}
                  className="flex items-center gap-3 text-gray-900 hover:text-indigo-600 transition"
                  aria-label={t('contact.ariaEmail', { email: CONTACT_INFO.emailAddress })}
                >
                  <span className="font-medium">{CONTACT_INFO.emailAddress}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* WhatsApp card */}
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                {/* WhatsApp inline SVG */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .01 5.373 0 12 0 13.99.477 15.9 1.38 17.6L0 24l6.5-1.34A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.12-3.48-8.52zM12 21.5c-1.7 0-3.36-.44-4.82-1.27L5 20l.82-2.25A9.44 9.44 0 012.5 12c0-5.25 4.25-9.5 9.5-9.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5z" />
                  <path d="M17.1 14.1c-.28-.14-1.64-.8-1.9-.9-.26-.12-.45-.17-.64.15-.18.32-.7.9-.86 1.08-.16.18-.31.2-.6.07-.28-.12-1.16-.43-2.21-1.36-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.15.19-.26.28-.43.09-.17.04-.32-.02-.45-.07-.12-.64-1.54-.88-2.12-.23-.56-.46-.48-.64-.49l-.55-.01c-.18 0-.47.07-.72.33-.26.26-1 1-1 2.45 0 1.44 1.03 2.84 1.17 3.04.14.2 2.02 3.1 4.9 4.35 1.24.49 1.72.52 2.35.44.38-.05 1.64-.67 1.88-1.32.24-.66.24-1.22.17-1.33-.07-.12-.25-.18-.53-.32z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{t('contact.whatsappTitle')}</h3>
                <p className="text-sm text-gray-600">{t('contact.whatsappDescription')}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={toWaLink(CONTACT_INFO.whatsappPhoneNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-900 hover:text-green-600 transition"
                  aria-label={t('contact.ariaWhatsApp', { phone: CONTACT_INFO.whatsappPhoneNumber })}
                >
                  <span className="font-medium">+{CONTACT_INFO.whatsappPhoneNumber}</span>
                </a>
              </li>

              <li>
                <a
                  href={toWaLink(CONTACT_INFO.secondaryPhoneNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-900 hover:text-green-600 transition"
                  aria-label={t('contact.ariaWhatsApp', { phone: CONTACT_INFO.secondaryPhoneNumber })}
                >
                  <span className="font-medium">+{CONTACT_INFO.secondaryPhoneNumber}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick form / CTA */}
          <motion.div
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-lg font-semibold">{t('contact.formTitle')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('contact.formDescription')}</p>

            {/* Simple mailto form (no backend) */}
            <form
              className="mt-4 grid grid-cols-1 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name") || "";
                const message = data.get("message") || "";
                openWhatsApp(`Nom: ${name}\n\n${message}`);
              }}
            >
              <input
                name="name"
                placeholder={t('contact.namePlaceholder')}
                className="w-full rounded-md bg-gray-200 border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full rounded-md bg-gray-200 border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow transition"
                >
                  {t('contact.sendButton')}
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-gray-500">{t('contact.formFooter')}</p>
          </motion.div>
        </div>

        {/* Footer small */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <span>{t('contact.responseHours')} </span>
          <span>{t('contact.responseTime')}</span>
        </div>
      </div>
    </section>
  );
}
