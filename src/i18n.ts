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
      loading: "Loading forms...",
      error_loading_forms: "Failed to load forms",
      available_forms: "Available Insurance Forms",
      forms: {
        health_insurance_application: "Health Insurance Application",
        home_insurance_application: "Home Insurance Application",
        car_insurance_application: "Car Insurance Application",
      },
      form_placeholders: {
        loading: "Loading...",
        select: "Please select",
      },
      form_errors: {
        required: "This field is required",
      },
    },
  },
  fa: {
    translation: {
      toggle: "تغییر حالت تاریک",
      language: "زبان",
      home: "خانه",
      about: "درباره ما",
      loading: "در حال بارگذاری فرم‌ها...",
      error_loading_forms: "بارگذاری فرم‌ها با خطا مواجه شد",
      available_forms: "فرم‌های موجود بیمه",
      forms: {
        health_insurance_application: "فرم بیمه سلامت",
        home_insurance_application: "فرم بیمه خانه",
        car_insurance_application: "فرم بیمه خودرو",
      },
      form_placeholders: {
        loading: "در حال بارگذاری...",
        select: "انتخاب کنید",
      },
      form_errors: {
        required: "این فیلد الزامی است",
      },
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
