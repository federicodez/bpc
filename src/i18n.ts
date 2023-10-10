"use client";

import i18n from "i18next";
import ChainedBackend from "i18next-chained-backend";
import Backend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/locales/en/translation.json";
import translationES from "../public/locales/es/translation.json";

export const fallbackLng = ["en", "es"];
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";
export const fallbackNS = "translation";
// const langDetectorOptions = {
//   order: ["cookie", "localStorage", "navigator"],
//
//   lookupCookie: "locale",
//   lookupLocalStorage: "locale",
//
//   caches: ["localStorage", "cookie"],
//   excludeCacheFor: ["cimode"],
//
//   checkWhiteList: true,
// };
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    // lng: "en",
    load: "languageOnly",
    returnNull: false,
    debug: true,
    // detection: langDetectorOptions,
    fallbackLng,
    defaultNS,
    fallbackNS,
    backend: {
      backends: [LocalStorageBackend, Backend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000,
        },
        {
          loadPath: "../public/locales/{{lng}}/translation.json",
        },
      ],
    },
  });

export default i18n;
