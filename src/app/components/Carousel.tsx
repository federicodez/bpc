"use client";

import Image from "next/image";
import operation from "../images/alex-op2.jpeg";
import procedures from "@/app/libs/procedures";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Carousel({ index }: { index: number }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(index);
  const count = procedures.length;
  const video = (
    <iframe
      className="card-content"
      width="480"
      height="360"
      src="//www.youtube.com/embed/MZLocncorVg"
      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
    ></iframe>
  );

  return (
    <>
      <div className="container  mx-auto justify-center">
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
        <div className="carousel relative w-full h-[53rem] sm:w-[40rem] sm:h-[30rem]">
          {active > 0 && (
            <button
              className="nav left text-5xl absolute flex justify-center items-center top-1/2 z-20 cursor-pointer select-none -translate-x-full sm:-translate-x-full -translate-Y-1/2"
              onClick={() => setActive((i) => i - 1)}
            >
              <TiChevronLeftOutline />
            </button>
          )}
          {procedures.map(({ content }, i) => (
            <div
              key={i}
              className="card-container absolute w-full h-full"
              style={{
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                pointerEvents: active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= 3 ? "0" : "1",
                display: Math.abs(active - i) > 3 ? "none" : "block",
              }}
            >
              <div
                id="carouselId"
                className="card w-full h-full p-4 rounded-2xl text-black text-justify border-4 border-solid border-white 
          shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
              >
                <h2 className="text-center text-4xl font-bold mb-3">
                  {t([`carousel.title${i}`])}
                </h2>
                <div className="flex justify-center items-center text-left">
                  {content.length ? t([`carousel.content${i}`]) : video}
                </div>
              </div>
            </div>
          ))}
          {active < count - 1 && (
            <button
              className="nav right text-5xl absolute flex justify-center items-center top-1/2 z-20 cursor-pointer select-none translate-x-full sm:translate-x-full translate-Y-1/2 right-0"
              onClick={() => setActive((i) => i + 1)}
            >
              <TiChevronRightOutline />
            </button>
          )}
        </div>
      </section>
    </>
  );
}
