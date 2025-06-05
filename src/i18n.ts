import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      toggle: "Toggle Dark Mode",
      language: "Language",
      home: "Home",
      about: "About",
    },
  },
  fa: {
    translation: {
      toggle: "تغییر حالت تاریک",
      language: "زبان",
      home: "خانه",
      about: "درباره ما",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
