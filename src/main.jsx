//import React from "react";
//import ReactDOM from "react-dom/client";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
//import App from "./App.jsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ["en", "si"],
//     //lng: "en", // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",
//     detection: {
//       order: ["path", "cookie", "htmlTag"],
//       caches: ["cookie"],
//     },
//     backend: {
//       loadPath: "/assets/locales/{{lng}}/translation.json",
//     },
//   });
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import '@formatjs/intl-numberformat/polyfill';
// import '@formatjs/intl-numberformat/locale-data/en';
// import '@formatjs/intl-numberformat/locale-data/sl'; 
// import '@formatjs/intl-datetimeformat/polyfill';
// import '@formatjs/intl-datetimeformat/locale-data/en'; // Load locale data for English
// import '@formatjs/intl-datetimeformat/locale-data/sl'; // Load locale data for Slovenian

// import '@formatjs/intl-relativetimeformat/polyfill';
// import '@formatjs/intl-relativetimeformat/locale-data/en'; // Load locale data for English
// import '@formatjs/intl-relativetimeformat/locale-data/sl'; // Load locale data for Slovenian


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);