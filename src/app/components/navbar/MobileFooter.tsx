"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Link from "next/link";
import spine from "@/app/images/spine.png";
import Image from "next/image";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import {
  AiOutlineCloseSquare,
  AiOutlineMenu,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import Procedures from "@/app/libs/procedures";

const MobileFooter = () => {
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
    <div
      className="
        fixed 
        justify-around
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-[#03045e]
        shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]
        lg:hidden
      "
    >
      <ul className="flex flex-row text-base text-white my-4">
        <li>
          <Link
            className="flex flex-col justify-center items-center text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            href="/"
          >
            <Image className="h-6 w-6 rounded-full" src={spine} alt="logo" />
            {t("navbar.title1")}
          </Link>
        </li>
        <li>
          {lng ? (
            <>
              <button
                className="flex flex-col justify-center items-center text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                onClick={handleLng}
              >
                <span className="fi fi-es fis h-6 w-10"></span>
                Español
              </button>
            </>
          ) : (
            <>
              <button
                className="flex flex-col justify-center items-center text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                onClick={handleLng}
              >
                <span className="fi fi-us fis h-6 w-10"></span>
                English
              </button>
            </>
          )}
        </li>
        <li>
          <Link
            className="flex flex-col justify-center items-center text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            href="/procedures"
          >
            <FaUserDoctor className="h-6 w-6" />
            {t("navbar.title2")}
          </Link>
        </li>
        <li>
          <Link
            className="flex flex-col justify-center items-center text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            href="/contact"
          >
            <MdOutlineContactPhone className="h-6 w-6" />
            {t("navbar.title3")}
          </Link>
        </li>
        <li>
          <button
            onClick={() => setActive(!active)}
            className="flex flex-col justify-center items-center text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
          >
            {active ? (
              <AiOutlineCloseSquare className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
            {t("navbar.title4")}
          </button>
        </li>
      </ul>
      <div
        className={`${
          active
            ? "absolute h-screen bottom-0 right-0 left-0 bg-[#03045e] text-white px-10"
            : "hidden"
        }`}
      >
        <ul>
          <nav className="flex justify-center">
            <button
              onClick={() => {
                setActive(!active);
                setProcedures(!procedures);
              }}
            >
              <AiOutlineCloseSquare className="w-10 h-10" />
            </button>
          </nav>

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
      </div>
    </div>
  );
};

export default MobileFooter;
