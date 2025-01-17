import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import translationUZ from "@/locales/uz/translation.json";
import translationRU from "@/locales/ru/translation.json";
import translationEN from "@/locales/en/translation.json";
import translationTR from "@/locales/tr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUZ },
    ru: { translation: translationRU },
    en: { translation: translationEN },
    tr: { translation: translationTR },
  },
  lng: JSON.parse(localStorage.getItem('restaurant')!)?.languages[0]?.code || 'uz',
  fallbackLng: JSON.parse(localStorage.getItem('restaurant')!)?.languages[0]?.code || 'uz',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
