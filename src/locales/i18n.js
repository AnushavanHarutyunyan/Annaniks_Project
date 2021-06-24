import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationRU from './ru/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            ru: {
                translations: translationRU,
            },
            en: {
                translations: translationEN,
            },
        },
        fallbackLng: 'en',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
