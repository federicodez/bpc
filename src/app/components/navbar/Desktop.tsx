"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import spine from "@/app/images/spine.png";
import Image from "next/image";
import { MdLanguage } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Desktop = () => {
  const [active, setActive] = useState(false);
  const [procedures, setProcedures] = useState(false);
  const [lng, setLng] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="hidden md:primary-header md:flex">
      <div className="logo flex">
        <Image className="spine-logo" src={spine} alt="spine logo" />
      </div>
      <h3 className="logo-title flex">Bowen Pain Center</h3>
      <nav>
        <ul className="primary-navigation flex">
          <li className="primary-list">
            <Link href="/" onClick={() => setActive(!active)}>
              {t("navbar.title1")}
            </Link>
          </li>
          <li className="primary-list">
            <Link
              href="/procedures"
              onClick={() => setActive(!active)}
              onMouseOver={() => setProcedures(!procedures)}
              className="navbar__procedures"
            >
              {t("navbar.title2")}
            </Link>
            <ul
              className={`${
                procedures
                  ? "absolute bg-[#03045e] p-4 top-full shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                  : "hidden"
              }`}
            >
              <button
                className={`${
                  procedures
                    ? "absolute text-3xl right-5 hover:text-[#ffd60a]"
                    : "hidden"
                }`}
                onClick={() => setProcedures(!procedures)}
              >
                <AiOutlineCloseSquare />
              </button>
              <li>
                <Link
                  href="/procedures/epidural-steroid-injection"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("navbar.procedures.procedure1")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                  href="/procedures/trigger-point-injection"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure2")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                  href="/procedures/medial-branch-block"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure3")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                  href="/procedures/radio-frequency-ablation"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure4")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                  href="/procedures/sacroiliac-joint-injection"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure5")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                  href="/procedures/percutaneous-discectomy"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure6")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#about"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.about_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#treating"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.treating_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#who"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.who_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#before"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.before_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#during"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.during_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#after"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.after_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#what"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.what_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#how"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.how_title")}
                </Link>
              </li>
              <li
                className={`${procedures ? "list-disc list-inside" : "hidden"}`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#benefits"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "text-base hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.benefits_title")}
                </Link>
              </li>
              <li
                className={`${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#pre"
                  onClick={() => setActive(!active)}
                  className={`${
                    procedures ? "hover:text-[#ffd60a]" : "hidden"
                  }`}
                >
                  {t("percdis.pre_main_title")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="primary-list">
            <Link href="/contact" onClick={() => setActive(!active)}>
              {t("navbar.title3")}
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-4 text-left">
            <MdLanguage className="lng-icon" onClick={() => setLng(!lng)} />
            <ul
              className={`nav__translate-btn bg-blue-900 rounded-lg ${
                lng ? "absolute md:right-4 lg:right-80" : "hidden"
              }`}
            >
              <li
                className={`lng-btn ${
                  lng
                    ? "flex justify-center m-1 p-1 hover:bg-[#d62828] rounded-lg"
                    : "hidden"
                }`}
                id="en-btn"
                onClick={() => {
                  changeLanguage("en");
                  setLng(!lng);
                }}
              >
                <span className="fi fi-us fis"></span>
                <p>English</p>
              </li>
              <li
                className={`lng-btn ${
                  lng
                    ? "flex justify-center m-1 p-1 hover:bg-[#ffd60a] rounded-lg"
                    : "hidden"
                }`}
                id="es-btn"
                onClick={() => {
                  changeLanguage("es");
                  setLng(!lng);
                }}
              >
                <span className="fi fi-es fis"></span>
                <p>Español</p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Desktop;
