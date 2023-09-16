"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import spine from "@/app/images/spine.png";
import Image from "next/image";
import { MdLanguage } from "react-icons/md";
import {
  AiOutlineCloseSquare,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Mobile = () => {
  const [active, setActive] = useState(false);
  const [procedures, setProcedures] = useState(false);
  const [lng, setLng] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="w-full top-0 md:hidden">
      <div className="mobile-logo flex">
        <Image className="mobile-spine-logo" src={spine} alt="spine logo" />
      </div>
      <h3 className="mobile-logo-title">Bowen Pain Center</h3>
      <nav>
        <button onClick={() => setActive(!active)} className="mobile-menu-btn">
          {active ? <AiOutlineCloseSquare /> : <AiOutlineMenu />}
        </button>
        <ul className={`mobile-navigation flex ${active ? "" : "hidden"}`}>
          <li className="mobile-list">
            <Link href="/" onClick={() => setActive(!active)}>
              {t("navbar.title1")}
            </Link>
          </li>
          <li className="mobile-list">
            <Link
              href="/procedures"
              onClick={() => setActive(!active)}
              className="mobile-link"
              id="plus"
            >
              {t("navbar.title2")}
            </Link>
            <button
              className="mobile-list-procedures-btn"
              onClick={() => setProcedures(!procedures)}
            >
              {!procedures ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
            <ul
              className={`mobile-procedures-navigation ${
                procedures ? "flex" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/procedures/epidural-steroid-injection"
                  onClick={() => setActive(!active)}
                  className={`mobile-procedures-navigation-list ${
                    procedures ? "flex" : "hidden"
                  }`}
                >
                  {t("navbar.procedures.procedure1")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list ${
                  procedures ? "flex" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/trigger-point-injection"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure2")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list ${
                  procedures ? "flex" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/medial-branch-block"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure3")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list ${
                  procedures ? "flex" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/radio-frequency-ablation"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure4")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list ${
                  procedures ? "flex" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/sacroiliac-joint-injection"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure5")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list ${
                  procedures ? "flex" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy"
                  onClick={() => setActive(!active)}
                >
                  {t("navbar.procedures.procedure6")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#about"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.about_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#treating"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.treating_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#who"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.who_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#before"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.before_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#during"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.during_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#after"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.after_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#what"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.what_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#how"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.how_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#benefits"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.benefits_title")}
                </Link>
              </li>
              <li
                className={`mobile-procedures-navigation-list-nested ${
                  procedures ? "text-base list-disc list-inside" : "hidden"
                }`}
              >
                <Link
                  href="/procedures/percutaneous-discectomy/#pre"
                  onClick={() => setActive(!active)}
                >
                  {t("percdis.pre_main_title")}
                </Link>
              </li>
            </ul>
          </li>
          <li className="mobile-list">
            <Link href="/contact" onClick={() => setActive(!active)}>
              {t("navbar.title3")}
            </Link>
          </li>
          <li className="mobile-list">
            <button
              className="mobile-lng-btn"
              onClick={() => {
                changeLanguage("en");
                setActive(!active);
              }}
            >
              English
            </button>
          </li>
          <li className="mobile-list">
            <button
              className="mobile-lng-btn"
              onClick={() => {
                changeLanguage("es");
                setActive(!active);
              }}
              value="espanol"
            >
              Español
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Mobile;
