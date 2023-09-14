"use client";

import Image from "next/image";
import operation from "../images/alex-op2.jpeg";
import procedures from "@/app/libs/procedures";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import Carousel from "@/app/components/Carousel";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Procedures = () => {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="container py-10 sm:py-20 mx-auto justify-center">
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
        </div>
        <section className="sm:w-full sm:h-full flex items-center justify-center overflow-hidden p-10 font-sans">
          <Carousel title={""} content={""} {...procedures} />
        </section>
      </Suspense>
    </>
  );
};

export default Procedures;
