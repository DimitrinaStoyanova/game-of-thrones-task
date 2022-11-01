import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/translations/en.json';

export const defaultNS = 'translation';

export const resources = {
  en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: 'translation',
  defaultNS,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
