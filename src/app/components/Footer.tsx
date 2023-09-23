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
    <footer className="flex p-4 justify-evenly bg-[#03045e]  text-center flex-col-reverse md:flex-row">
      <p className="text-[#adb5bd]">
        @2020 Bowen Pain Center
        <br />
        All rights reserved &copy;
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 text-[#fff] mb-3  md:gap-10 items-center">
        <Link
          className="md:hover:bg-[#caf0f8] md:rounded-lg md:hover:text-[#03045e] md:px-2"
          href="/"
        >
          {t("navbar.title1")}
        </Link>
        <Link
          className="md:hover:bg-[#caf0f8] md:rounded-lg md:hover:text-[#03045e] md:px-2"
          href="/procedures"
        >
          {t("navbar.title2")}
        </Link>
        <Link
          className="md:hover:bg-[#caf0f8] md:rounded-lg md:hover:text-[#03045e] md:px-2"
          href="/contact"
        >
          {t("navbar.title3")}
        </Link>

        {lng ? (
          <button
            className="md:hover:bg-[#caf0f8] md:rounded-lg md:hover:text-[#03045e] md:px-2"
            onClick={handleLng}
          >
            Español
          </button>
        ) : (
          <button
            className="md:hover:bg-[#caf0f8] md:rounded-lg md:hover:text-[#03045e] md:px-2"
            onClick={handleLng}
          >
            English
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
