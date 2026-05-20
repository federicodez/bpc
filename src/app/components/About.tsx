"use client";

import Image from "next/image";
import bpc_main from "@/app/images/bpc_main.jpeg";
import operation from "@/app/images/alex-op3.jpeg";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Footer } from "@/app/components";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Image
        className="operation lg:mt-[6%] h-96 object-center object-cover shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
        src={operation}
        priority={true}
        alt="operation picture"
      />
      <div className="container mx-auto my-10">
        <h1 className="title m-10 text-center text-2xl my-4 font-bold text-blue-800">
          {t("about.title0")}
        </h1>
        <p className="m-4 lg:mx-40">{t("about.p1")}</p>
        <p className="m-4 lg:mx-40">{t("about.p2")}</p>
        <p className="m-4 lg:mx-40">{t("about.p3")}</p>
        <h1 className="title m-10 text-center text-2xl my-4 font-bold text-blue-800">
          {t("about.title1")}
        </h1>
        <div className="grid mx-auto my-10 md:w-[800px] grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            className="profile-image object-contain w-auto md:w-96 h-auto border-8 border-solid border-white 
          shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
            src={bpc_main}
            alt="profile picture"
          />
          <div className="mb-20 lg:mb-0">
            <h3 className="font-bold text-center md:text-left">
              {t("about.title2")}
            </h3>
            <p className="m-4">{t("about.p4")}</p>
            <p className="m-4">{t("about.p5")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
