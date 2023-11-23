import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common from "./locales/en/common.json";

export const resources = {
  en: {
    translation: {
      ...common,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources,
  });

export default i18n;
