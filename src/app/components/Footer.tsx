"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { changeLanguage } from "i18next";
import { useState } from "react";

const Footer = () => {
  const [lng, setLng] = useState(true);
  const { t } = useTranslation();

  const handleLng = () => {
    if (lng) {
      changeLanguage("es");
      setLng(!lng);
    } else {
      changeLanguage("en");
      setLng(!lng);
    }
  };
  return (
    <footer className="flex p-4 justify-evenly bg-[#03045e] text-white text-center flex-col-reverse md:flex-row">
      <p>
        @2020 Bowen Pain Center
        <br />
        All rights reserved &copy;
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10 items-center">
        <Link href="/">{t("navbar.title1")}</Link>
        <Link href="/procedures">{t("navbar.title2")}</Link>
        <Link href="/contact">{t("navbar.title3")}</Link>

        {lng ? (
          <button className="hover:text-[#ffd60a]" onClick={handleLng}>
            Español
          </button>
        ) : (
          <button className="hover:text-[#d62828]" onClick={handleLng}>
            English
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
