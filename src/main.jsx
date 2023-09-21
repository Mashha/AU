import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import App from "./App.jsx";

const translationEN = "/assets/locales/en/translation.json?url"
const translationSI = "/assets/locales/si/translation.json?url"

const resources = {
  en: {
    translation: translationEN,
  },
  si: {
    translation: translationSI,
  },
 };

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "si"],
    debug: false,
    fallbackLng: "en",
    resources,
    detection: {
      order: [
        "path",
        "cookie",
        "htmlTag",
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
