"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { LoadingModel } from "@/app/components";
import { Suspense } from "react";

const Video = dynamic(() => import("@/app/components/Video"), { ssr: false });

const Discectomy = () => {
  const [active, setActive] = useState<number>();
  const { t } = useTranslation();

  const videos = [
    {
      title: t("video.title0"),
      src: t("video.src0"),
    },
    {
      title: t("video.title1"),
      src: t("video.src1"),
    },
    {
      title: t("video.title2"),
      src: t("video.src2"),
    },
  ];

  return (
    <>
      <div className="container  mx-auto mt-auto mb-40 lg:mb-10 lg:mt-40 justify-center">
        <h1 className="title text-2xl font-bold text-blue-800 mt-8">
          {t("percdis.main_title")}
        </h1>
        <div className="flex justify-center items-center p-4 mt-8 gap-4 flex-col lg:flex-row shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
          {videos.map(({ title, src }, id) => (
            <div
              onClick={() => setActive(id)}
              key={id}
              className="videos flex flex-col justify-center items-center"
            >
              <span
                className={`text-center text-white scale-110 ${
                  active === id ? "hidden" : "translate-y-32 videos-title"
                }`}
              >
                {title}
              </span>
              <Video video={src} />
            </div>
          ))}
        </div>
        <h1 className="title text-2xl font-bold text-blue-800 mt-8" id="about">
          {t("percdis.about_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.about_1")}</p>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.about_2")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="treating">
          {t("percdis.treating_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.treating_1")}</p>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.treating_2")}</p>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.treating_3")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="who">
          {t("percdis.who_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.who_1")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="before">
          {t("percdis.before_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.before_1")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="during">
          {t("percdis.during_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.during_1")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="after">
          {t("percdis.after_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.after_1")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="what">
          {t("percdis.what_title")}
        </h1>
        <br />
        <p className="m-4 lg:mx-40">{t("percdis.what_1")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="how">
          {t("percdis.how_title")}
        </h1>
        <br />
        <h2 className="mx-4 lg:mx-40">{t("percdis.how_1_title")}</h2>
        <br />
        <p className="mx-4 lg:mx-40">{t("percdis.how_1_content")}</p>
        <br />
        <h2 className="mx-4 lg:mx-40">{t("percdis.how_2_title")}</h2>
        <br />
        <p className="mx-4 lg:mx-40">{t("percdis.how_2_content")}</p>
        <br />
        <h2 className="mx-4 lg:mx-40">{t("percdis.how_3_title")}</h2>
        <br />
        <p className="mx-4 lg:mx-40">{t("percdis.how_3_content")}</p>
        <br />
        <h2 className="mx-4 lg:mx-40">{t("percdis.how_4_title")}</h2>
        <br />
        <p className="mx-4 lg:mx-40">{t("percdis.how_4_content")}</p>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="benefits">
          {t("percdis.benefits_title")}
        </h1>
        <h3 className="m-4 lg:mx-40">
          {t("percdis.benefits_list_first_title")}
        </h3>
        <ul>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_first_content_1")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_first_content_2")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_first_content_3")}
          </li>
        </ul>
        <h3 className="m-4 lg:mx-40">
          {t("percdis.benefits_list_second_title")}
        </h3>
        <ul>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_second_content_1")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_second_content_2")}
          </li>
        </ul>
        <h3 className="m-4 lg:mx-40">
          {t("percdis.benefits_list_third_title")}
        </h3>
        <ul>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_third_content_1")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.benefits_list_third_content_2")}
          </li>
        </ul>
        <br />
        <h1 className="title text-2xl font-bold text-blue-800" id="pre">
          {t("percdis.pre_main_title")}
        </h1>
        <br />
        <h2 className="m-4 lg:mx-40">{t("percdis.pre_sub_title")}</h2>
        <br />
        <ul>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.pre_content_1")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.pre_content_2")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.pre_content_3")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.pre_content_4")}
          </li>
          <li className="list-disc list-inside mx-4 lg:mx-40">
            {t("percdis.pre_content_5")}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Discectomy;
