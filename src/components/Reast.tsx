import { FaGraduationCap, FaBrain, FaHandsHelping, FaRocket, FaCheckCircle, FaArrowRight, FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
import Packs from './Packs';
import Ways from './Ways';
import Apropos from './Apropos';
import ContactUs from './ContactUs';
import Footer from './Footer'; 
import { useTranslation, Trans } from 'react-i18next';

export default function Reast(){
  const { t } = useTranslation();

  return (
    <>
      {/* About Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                <Trans i18nKey="reast.title">
                  Plus Qu'une Simple Formation
                </Trans>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('reast.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Notre Mission */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
                <FaBullseye className="text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t('reast.mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('reast.mission.description')}
              </p>
            </div>
            {/* Notre Vision */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
                <FaEye className="text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t('reast.vision.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('reast.vision.description')}
              </p>
            </div>
            {/* Nos Valeurs */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
                <FaHeart className="text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{t('reast.values.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('reast.values.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Packs/>
      <Ways/>
      <Apropos/>
      <ContactUs/>
      <Footer/>
    </>
  );
};