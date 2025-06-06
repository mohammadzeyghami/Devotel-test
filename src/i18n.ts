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
        input: "Enter value",
      },
      form_errors: {
        required: "This field is required",
      },
      table: {
        search: "Search...",
        page: "Page {{page}} of {{totalPages}}",
        prev: "Prev",
        next: "Next",
        columns: {
          "Full Name": "Full Name",
          Age: "Age",
          Gender: "Gender",
          "Insurance Type": "Insurance Type",
          City: "City",
        },
      },
    },
  },
  fa: {
    translation: {
      toggle: "تغییر حالت تاریک",
      language: "زبان",
      home: "خانه",
      form: "فرم",
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
        input: "مقداری وارد کنید",
      },
      form_errors: {
        required: "این فیلد الزامی است",
      },
      table: {
        search: "جستجو...",
        page: "صفحه {{page}} از {{totalPages}}",
        prev: "قبلی",
        next: "بعدی",
        columns: {
          "Full Name": "نام کامل",
          Age: "سن",
          Gender: "جنسیت",
          "Insurance Type": "نوع بیمه",
          City: "شهر",
        },
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
