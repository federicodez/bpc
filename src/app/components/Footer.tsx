"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex p-4 justify-evenly bg-[#03045e] text-white text-center flex-col md:flex-row">
      <p>
        @2020 Bowen Pain Center
        <br />
        All rights reserved &copy;
      </p>
      <div className="flex md:gap-10 items-center flex-col md:flex-row">
        <Link href="/">{t("navbar.title1")}</Link>
        <Link href="/procedures">{t("navbar.title2")}</Link>
        <Link href="/contact">{t("navbar.title3")}</Link>
      </div>
    </footer>
  );
};

export default Footer;
