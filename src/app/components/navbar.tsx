"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import spine from "@/app/images/spine.png";
import Image from "next/image";
import { MdLanguage } from "react-icons/md";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [procedures, setProcedures] = useState(false);
  const [lng, setLng] = useState(false);
  const [percdis, setPercdis] = useState(false);
  const { t } = useTranslation();

  return (
    <header>
      <nav className="w-full fixed z-10 bg-blue-950 top-0 left-0 right-0 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex-1 items-center justify-between py-3 md:py-5 md:block">
            <div className="flex flex-row flex-nowrap">
              <Image className="spine-logo" src={spine} alt="spine logo" />
              <h3 className="text-white text-xl mx-auto self-center md:text-2xl">
                Bowen Pain Center
              </h3>
              <div className="self-center md:hidden">
                <button
                  onClick={() => setActive(!active)}
                  className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                >
                  {active ? (
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 40 40"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={5}
                      stroke="white"
                      fill="transparent"
                    >
                      <path
                        className="close-x"
                        d="M 10,10 L 30,30 M 30,10 L 10,30"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      x-show="!showMenu"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
                active
                  ? "border-t-2 pt-8 md:border-none md:h-fit md:p-0 block"
                  : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-5 text-left">
                  <Link href="/" onClick={() => setActive(!active)}>
                    {t("navbar.title1")}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-5 text-left">
                  <Link
                    href="/procedures"
                    onClick={() => setActive(!active)}
                    onMouseOver={() => setProcedures(!procedures)}
                    className="navbar__procedures"
                  >
                    {t("navbar.title2")}
                  </Link>
                  <ul className="absolute bg-blue-950 p-2">
                    <li>
                      <Link
                        href="/procedures/epidural-steroid-injection"
                        onClick={() => setActive(!active)}
                        className={`${
                          procedures ? "hover:bg-blue-500" : "hidden"
                        }`}
                      >
                        {t("navbar.procedures.procedure1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          procedures ? "hover:bg-blue-500" : "hidden"
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
                          procedures ? "hover:bg-blue-500" : "hidden"
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
                          procedures ? "hover:bg-blue-500" : "hidden"
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
                          procedures ? "hover:bg-blue-500" : "hidden"
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
                          procedures ? "hover:bg-blue-500" : "hidden"
                        }`}
                        href="/procedures/percutaneous-discectomy"
                        onClick={() => setActive(!active)}
                        onMouseOver={() => setPercdis(!percdis)}
                      >
                        {t("navbar.procedures.procedure6")}
                      </Link>
                      <ul>
                        <li className="absolute bg-blue-950 p-2">
                          <Link
                            href="/procedures/percutaneous-discectomy/#who"
                            onClick={() => {
                              setPercdis(!percdis);
                              setActive(!active);
                            }}
                            className={`${
                              percdis ? "hover:bg-blue-500" : "hidden"
                            }`}
                          >
                            {t("percdis.who_title")}
                          </Link>
                        </li>
                        <li className="absolute bg-blue-950 p-2">
                          <Link
                            href="/procedures/percutaneous-discectomy/#how"
                            onClick={() => {
                              setPercdis(!percdis);
                              setActive(!active);
                            }}
                            className={`${
                              percdis ? "hover:bg-blue-500" : "hidden"
                            }`}
                          >
                            {t("percdis.how_title")}
                          </Link>
                        </li>
                        <li className="absolute bg-blue-950 p-2">
                          <Link
                            href="/procedures/percutaneous-discectomy/#benefits"
                            onClick={() => {
                              setPercdis(!percdis);
                              setActive(!active);
                            }}
                            className={`${
                              percdis ? "hover:bg-blue-500" : "hidden"
                            }`}
                          >
                            {t("percdis.benefits_title")}
                          </Link>
                        </li>
                        <li className="absolute bg-blue-950 p-2">
                          <Link
                            href="/procedures/percutaneous-discectomy/#pre"
                            onClick={() => {
                              setPercdis(!percdis);
                              setActive(!active);
                            }}
                            className={`${
                              percdis ? "hover:bg-blue-500" : "hidden"
                            }`}
                          >
                            {t("percdis.pre_main_title")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-5 text-left">
                  <Link href="/contact" onClick={() => setActive(!active)}>
                    {t("navbar.title3")}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-4 text-left">
                  <MdLanguage
                    className="lng-icon"
                    onClick={() => setLng(!lng)}
                  />
                  <ul
                    className={`nav__translate-btn bg-blue-900 rounded-lg ${
                      lng ? "absolute md:right-4 lg:right-80" : "hidden"
                    }`}
                  >
                    <li
                      className={`lng-btn ${
                        lng
                          ? "flex justify-center m-1 p-1 hover:bg-red-500 rounded-lg"
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
                          ? "flex justify-center m-1 p-1 hover:bg-yellow-500 rounded-lg"
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
