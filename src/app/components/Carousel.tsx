"use client";
import procedures from "@/app/libs/procedures";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useState } from "react";

type Procedures = {
  title: string;
  content: string;
};

export default function Carousel({ title, content }: Procedures) {
  const [active, setActive] = useState(2);
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
    <div className="carousel relative w-[20rem] h-[51rem] sm:w-[40rem] sm:h-[30rem]">
      {active > 0 && (
        <button
          className="nav left text-7xl absolute flex justify-center items-center top-1/2 z-20 cursor-pointer select-none -translate-x-2/3 sm:-translate-x-full -translate-Y-1/2"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {procedures.map(({ title, content }, i) => (
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
          <div className="card w-full h-full p-8 rounded-2xl text-black text-justify">
            <h2 className="text-center text-4xl font-bold mb-3">{title}</h2>
            <div className="flex justify-center items-center text-left">
              {content.length ? content : video}
            </div>
          </div>
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right text-7xl absolute flex justify-center items-center top-1/2 z-20 cursor-pointer select-none translate-x-2/3 sm:translate-x-full translate-Y-1/2 right-0"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
}
