"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import spine from "@/app/images/spine.png";
import Image from "next/image";
import {
  AiOutlineCloseSquare,
  AiOutlineMenu,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [procedures, setProcedures] = useState(false);
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
    <header>
      <nav className="w-full fixed z-10 bg-[#03045e] top-0 left-0 right-0 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
        <div className="justify-between px-4 mx-auto overflow-y-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex-1 items-center justify-between py-3 md:py-5 md:block">
            <div className="flex flex-row flex-nowrap">
              <Image
                className="spine-logo w-12 rounded-full m-2"
                src={spine}
                alt="spine logo"
              />
              <h3 className="text-white flex-nowrap text-xl mx-auto self-center md:text-2xl">
                Bowen Pain Center
              </h3>
              <div className="self-center md:hidden">
                <button
                  onClick={() => setActive(!active)}
                  className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                >
                  {active ? <AiOutlineCloseSquare /> : <AiOutlineMenu />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
                active
                  ? "overscroll-contain border-t-2 pt-8 md:border-none md:h-fit md:p-0 block"
                  : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto justify-center md:flex">
                <li className=" pb-6 text-xl text-white py-2 md:px-6 md:pt-5 text-left">
                  <Link href="/" onClick={() => setActive(!active)}>
                    {t("navbar.title1")}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-5 text-left">
                  <Link
                    href="/procedures"
                    onClick={() => {
                      setActive(!active);
                      setProcedures(!procedures);
                    }}
                    onMouseOver={() => setProcedures(!procedures)}
                  >
                    {t("navbar.title2")}
                  </Link>
                  <button
                    onClick={() => setProcedures(!procedures)}
                    className="absolute right-5 md:hidden"
                  >
                    {!procedures ? <AiOutlinePlus /> : <AiOutlineMinus />}
                  </button>
                  <ul
                    className={`
                    ${
                      procedures
                        ? "mt-5 md:absolute text-base bg-[#03045e] p-2 md:mt-0 md:top-full shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        : "hidden"
                    }`}
                  >
                    <button
                      onClick={() => setProcedures(!procedures)}
                      className={`navbar-procedures-nested-links-close-btn ${
                        procedures ? "md:absolute md:right-5" : ""
                      }`}
                    >
                      <AiOutlineCloseSquare />
                    </button>
                    <li className="border-b p-2 m-2">
                      <Link
                        href="/procedures/epidural-steroid-injection/#carouselId"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className="md:hover:text-[#ffd60a]"
                      >
                        {t("navbar.procedures.procedure1")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2">
                      <Link
                        href="/procedures/trigger-point-injection/#carouselId"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className="md:hover:text-[#ffd60a]"
                      >
                        {t("navbar.procedures.procedure2")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2">
                      <Link
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                        href="/procedures/medial-branch-block/#carouselId"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                      >
                        {t("navbar.procedures.procedure3")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2">
                      <Link
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                        href="/procedures/radio-frequency-ablation/#carouselId"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                      >
                        {t("navbar.procedures.procedure4")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2">
                      <Link
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                        href="/procedures/sacroiliac-joint-injection/#carouselId"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                      >
                        {t("navbar.procedures.procedure5")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2">
                      <Link
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                        href="/procedures/percutaneous-discectomy/#carouselId"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                      >
                        {t("navbar.procedures.procedure6")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#about"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.about_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#treating"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.treating_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#who"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.who_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#before"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.before_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#during"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.during_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#after"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.after_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#what"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.what_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#how"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.how_title")}
                      </Link>
                    </li>
                    <li className="border-b p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#benefits"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.benefits_title")}
                      </Link>
                    </li>
                    <li className="p-2 m-2 list-disc list-inside">
                      <Link
                        href="/procedures/percutaneous-discectomy/#pre"
                        onClick={() => {
                          setActive(!active);
                          setProcedures(!procedures);
                        }}
                        className={`${
                          procedures ? "md:hover:text-[#ffd60a]" : ""
                        }`}
                      >
                        {t("percdis.pre_main_title")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-5 text-left">
                  <Link href="/contact" onClick={() => setActive(!active)}>
                    {t("navbar.title3")}
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 md:pt-4 text-left">
                  {lng ? (
                    <button
                      className="mt-1 hover:text-[#ffd60a]"
                      onClick={handleLng}
                    >
                      Español
                    </button>
                  ) : (
                    <button
                      className="mt-1 hover:text-[#d62828]"
                      onClick={handleLng}
                    >
                      English
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
