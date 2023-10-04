"use client";

import { useState } from "react";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Link from "next/link";
import spine from "@/app/images/spine.png";
import Image from "next/image";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const MobileFooter = () => {
  const routes = useRoutes();
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
      <ul className="flex flex-row text-white gap-5">
        <li className="flex items-center flex-col">
          <FaUserDoctor className="h-6 w-8" />
          <Link
            className="text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            href="/procedures"
          >
            Procedures
          </Link>
        </li>
        <li className="flex items-center flex-col">
          <MdOutlineContactPhone className="h-6 w-8" />
          <Link
            className="text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
        <li className="flex items-center flex-col">
          <Image className="h-6 w-8 rounded-full" src={spine} alt="logo" />
          <Link
            className="text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center">
          {lng ? (
            <div className="flex flex-col justify-center items-center">
              <span className="fi fi-es fis"></span>
              <button
                className="text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                onClick={handleLng}
              >
                Español
              </button>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <span className="fi fi-us fis"></span>
              <button
                className="text-white mt-1 hover:bg-[#caf0f8] rounded-lg hover:text-[#03045e] px-2"
                onClick={handleLng}
              >
                English
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileFooter;
