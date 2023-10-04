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
    <footer className="hidden lg:flex lg:p-4 lg:justify-evenly lg:bg-[#03045e]  lg:text-center lg:flex-col-reverse">
      <div className="flex flex-row justify-center gap-32">
        <p className="text-[#adb5bd]">@2020 Bowen Pain Center</p>
        <p className="text-[#adb5bd]">All rights reserved &copy;</p>
      </div>
      <div className="grid grid-cols-4 text-[#fff] mb-3 items-center">
        <Link
          className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
          href="/"
        >
          {t("navbar.title1")}
        </Link>
        <Link
          className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
          href="/procedures"
        >
          {t("navbar.title2")}
        </Link>
        <Link
          className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
          href="/contact"
        >
          {t("navbar.title3")}
        </Link>

        {lng ? (
          <button
            className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            onClick={handleLng}
          >
            Español
          </button>
        ) : (
          <button
            className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
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
