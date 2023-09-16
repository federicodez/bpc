"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { changeLanguage } from "i18next";

const Footer = () => {
  const { t } = useTranslation();
  const handleLng = (lng: string) => changeLanguage(lng);
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

        <select
          className="flex justify-self-center m-2 w-32"
          id="language"
          name="language"
          onChange={(e) => handleLng(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
