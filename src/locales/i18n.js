import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationRU from './ru/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translations: translationRU,
            },
            en: {
                translations: translationEN,
            },
        },
        fallbackLng: 'en',
        debug: false,

        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
