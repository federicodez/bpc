"use client";

import Image from "next/image";
import profilePic from "@/app/images/profilePic.jpg";
import operation from "@/app/images/alex-op3.jpeg";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "English" },
  es: { title: "Español" },
};

const About = () => {
  const { t, i18n, ready } = useTranslation();
  return (
    <>
      <Image
        className="operation my-10 h-96 object-center object-cover shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
        src={operation}
        priority={true}
        alt="operation picture"
      />
      <div className="container mx-auto">
        {Object.keys(locales).map((locale, id) => (
          <button
            key={id}
            className="translate-btn"
            style={{
              fontWeight: i18n.resolvedLanguage === locale ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(locale)}
          >
            {locales[locale].title}
          </button>
        ))}
        <p className="m-4 lg:mx-40">{t("about.p1")}</p>
        <p className="m-4 lg:mx-40">{t("about.p2")}</p>
        <p className="m-4 lg:mx-40">{t("about.p3")}</p>
        <h1 className="title m-10 text-center text-2xl font-bold text-blue-800">
          {t("about.title1")}
        </h1>
        <p className="m-4 lg:mx-40">{t("about.p4")}</p>
        <p className="m-4 lg:mx-40">
          <strong>{t("about.p5")}</strong>
        </p>
        <h1 className="title m-10 text-center text-2xl font-bold text-blue-800">
          {t("about.title2")}
        </h1>
        <p className="m-4 lg:mx-40">{t("about.p6")}</p>
        <p className="m-4 lg:mx-40">{t("about.p7")}</p>
        <h1 className="title m-10 text-center text-2xl my-4 font-bold text-blue-800">
          {t("about.title3")}
        </h1>
        <div className="grid mx-auto my-10 md:w-[800px] grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            className="profile-image object-contain w-auto lg:w-96 h-auto border-8 border-solid border-white 
          shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
            src={profilePic}
            alt="profile picture"
          />
          <div>
            <h3 className="font-bold text-center md:text-left">
              {t("about.title4")}
            </h3>
            <p className="m-4">{t("about.p8")}</p>
            <p className="m-4">{t("about.p9")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
