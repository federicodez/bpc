"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingModel } from "@/app/components";
import { Footer } from "@/app/components";
import Image from "next/image";
import operation from "../images/alex-op2.jpeg";
import procedures from "@/app/libs/procedures";
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";
import Percdis from "./components/Percdis";
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";

const Navbar = dynamic(() => import("@/app/components/navbar/Navbar"), {
  ssr: false,
});

const Procedures = () => {
  const [procedureID, setProcedureID] = useState<number | null>(0);
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoadingModel />}>
      <Navbar />
      <div className="container  mx-auto mt-auto mb-40 lg:mb-10 lg:mt-40 justify-center">
        <h1 className="title m-10 text-2xl text-center font-bold text-blue-800">
          {t("procedures.title1")}
        </h1>
        <div className="grid justify-items-center gap-4 md:w-[800px] mx-auto sm:my-10 grid-cols-1 md:grid-cols-2">
          <Image
            className="procedure-image object-contain w-96 h-full border-8 border-solid border-white 
          shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
            src={operation}
            priority={true}
            alt="procedure image"
          />
          <div>
            <p className="m-4">{t("procedures.p1")}</p>
            <p className="m-4">{t("procedures.p2")}</p>
          </div>
        </div>
        <ul>
          {procedures.map(({ content }, id) => (
            <li key={id}>
              <div className="m-4 p-4 rounded-lg shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
                <div className="flex flex-row gap-5 justify-center items-center">
                  <h1 className="text-center underline">
                    {t([`carousel.title${id}`])}
                  </h1>
                  {procedureID === id ? (
                    <BsArrowsCollapse onClick={() => setProcedureID(null)} />
                  ) : (
                    <BsArrowsExpand onClick={() => setProcedureID(id)} />
                  )}
                </div>
                <div className={procedureID === id ? "content" : "hidden"}>
                  {content.length ? t([`carousel.content${id}`]) : <Percdis />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Procedures;
