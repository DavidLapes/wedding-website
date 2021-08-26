import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "cz",
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        // react-i18next options
        react: {
            wait: true
        }
    })
    .then(() => {
        console.log("Localization initialized")
    });

export default i18n;
