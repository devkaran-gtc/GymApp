import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';
import 'intl-pluralrules';


// Import pluralization format data for fallback


// Language detection
const languageDetector: any = {
    type: 'languageDetector',
    async: true,
    detect: (callback: (locale: string) => void) => {
        const { I18nManager } = NativeModules;
        const locale = I18nManager.localeIdentifier;
        callback(locale);
    },
    init: () => { },
    cacheUserLanguage: () => { },
};

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: { translation: require('../locales/en.json') },
            hi: { translation: require('../locales/hi.json') },
        },

        interpolation: {
            escapeValue: false, // React is already safe from XSS
        },


    });

export default i18n;
