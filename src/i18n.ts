"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNs1 from "../locales/en/ns1.json";
import esNs1 from "../locales/es/ns1.json";

export const defaultNS = "ns1";
export const fallbackNS = "fallback";

i18n.use(initReactI18next).init({
  lng: "en",
  returnNull: false,
  debug: true,
  fallbackLng: "en",
  defaultNS,
  fallbackNS,
  resources: {
    en: {
      ns1: enNs1,
    },
    es: {
      ns1: esNs1,
    },
  },
});

export default i18n;
