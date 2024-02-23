"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import spine from "@/app/images/spine.png";
import logo from "@/app/images/logo.png";
import Image from "next/image";
import {
  AiOutlineCloseSquare,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import Procedures from "@/app/libs/procedures";

const DesktopNavbar = () => {
  const [active, setActive] = useState(false);
  const [procedures, setProcedures] = useState(false);
  const [lng, setLng] = useState(true);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
    <>
      <div
        className="
        hidden 
        lg:fixed 
        lg:top-0
        lg:right-0 
        lg:left-0 
        lg:z-40 
        lg:w-full 
        lg:bg-[#03045e] 
        lg:pb-4
        lg:flex
        lg:justify-around
        lg:shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]
      "
      >
        <nav className="mt-4 flex flex-row justify-around">
          <div className="flex flex-row flex-nowrap mr-5">
            <Image className="w-20" src={logo} alt="spine logo" />
            <div className="flex flex-col justify-center ml-2">
              <h3 className="text-white text-3xl tracking-widest">BOWEN</h3>
              <h3 className="text-white flex-nowrap text-lg self-center tracking-wider">
                PAIN CENTER
              </h3>
            </div>
          </div>

          <ul className="flex items-center">
            <li className="text-xl text-white px-3">
              <Link
                className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                href="/"
                onClick={() => setActive(!active)}
              >
                {t("navbar.title1")}
              </Link>
            </li>
            <li className="text-xl text-white px-3">
              <Link
                className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                href="/procedures"
                onClick={() => {
                  setActive(!active);
                  setProcedures(false);
                }}
                onMouseOver={() => setProcedures(true)}
              >
                {t("navbar.title2")}
              </Link>
              <button
                onClick={() => setProcedures(!procedures)}
                className="relative left-[60%] md:hidden"
              >
                {!procedures ? <AiOutlinePlus /> : <AiOutlineMinus />}
              </button>
              <ul
                onMouseLeave={() => setProcedures(false)}
                className={`
                    ${
                      procedures
                        ? "absolute text-base bg-[#03045e] p-2 mt-0 top-2/3 shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        : "hidden"
                    }`}
              >
                <button
                  onClick={() => setProcedures(!procedures)}
                  className={`navbar-procedures-nested-links-close-btn ${
                    procedures ? "absolute right-5" : ""
                  }`}
                >
                  <AiOutlineCloseSquare />
                </button>
                {Procedures.map((procedure, index) => (
                  <li key={index} className="border-b p-2 m-2">
                    <Link
                      className={`${procedures ? "hover:text-[#ffd60a]" : ""}`}
                      href={`/procedures/${index}/#procedureId`}
                      onClick={() => {
                        setActive(!active);
                        setProcedures(!procedures);
                      }}
                    >
                      {t([`navbar.procedures.procedure${index}`])}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="text-xl text-white px-3">
              <Link
                className="hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                href="/contact"
                onClick={() => setActive(!active)}
              >
                {t("navbar.title3")}
              </Link>
            </li>
            <li className="text-xl text-white px-3">
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
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DesktopNavbar;
