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

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {procedures.map(({ title, content }, i) => (
        <div
          key={i}
          className="card-container"
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
          <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
}

// className={`card-container [var(--active):${
//   i === active
// }?1:0][var(--offset):(${active - i})/3] [var(--direction):Math.sign(${
//   active - i
// })] [--abs-offset:Math.abs(${active - i})/3] pointer-events-[${
//   active === i
// }?auto:none] opacity-[Math.abs(${active - i})>=3?0:1] [Math.abs(${
//   active - i
// })>3?hidden:block]`}

// const addActive = async (e: HTMLDivElementElement): void => {
//   const option = e.target;
//   const options = document.body.querySelectorAll(".option");
//   options.forEach((el: HTMLDivElement): void => {
//     el.classList.remove("active");
//   });
//   option.classList.add("active");
// };
//         <iframe
//           className="card-content"
//           width="480"
//           height="360"
//           src="//www.youtube.com/embed/MZLocncorVg"
//           allow="accelerometer;
// autoplay;
// clipboard-write;
// encrypted-media;
// gyroscope;
// picture-in-picture;
// web-share"
//         ></iframe>
