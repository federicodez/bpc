"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { useTranslation } from "react-i18next";
import { Footer } from "@/app/components";

const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Discectomy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="disectomy container flex flex-col  py-32 mx-auto justify-center">
          <h1 className="title text-2xl font-bold text-blue-800" id="about">
            {t("percdis.about_title")}
          </h1>
          <br />
          <p>{t("percdis.about_1")}</p>
          <br />
          <p>{t("percdis.about_2")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="treating">
            {t("percdis.treating_title")}
          </h1>
          <br />
          <p>{t("percdis.treating_1")}</p>
          <br />
          <p>{t("percdis.treating_2")}</p>
          <br />
          <p>{t("percdis.treating_3")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="who">
            {t("percdis.who_title")}
          </h1>
          <br />
          <p>{t("percdis.who_1")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="before">
            {t("percdis.before_title")}
          </h1>
          <br />
          <p>{t("percdis.before_1")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="during">
            {t("percdis.during_title")}
          </h1>
          <br />
          <p>{t("percdis.during_1")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="after">
            {t("percdis.after_title")}
          </h1>
          <br />
          <p>{t("percdis.after_1")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="what">
            {t("percdis.what_title")}
          </h1>
          <br />
          <p>{t("percdis.what_1")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="how">
            {t("percdis.how_title")}
          </h1>
          <br />
          <h2>{t("percdis.how_1_title")}</h2>
          <br />
          <p>{t("percdis.how_1_content")}</p>
          <br />
          <h2>{t("percdis.how_2_title")}</h2>
          <br />
          <p>{t("percdis.how_2_content")}</p>
          <br />
          <h2>{t("percdis.how_3_title")}</h2>
          <br />
          <p>{t("percdis.how_3_content")}</p>
          <br />
          <h2>{t("percdis.how_4_title")}</h2>
          <br />
          <p>{t("percdis.how_4_content")}</p>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="benefits">
            {t("percdis.benefits_title")}
          </h1>
          <h3>{t("percdis.benefits_list_first_title")}</h3>
          <ul>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_first_content_1")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_first_content_2")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_first_content_3")}
            </li>
          </ul>
          <h3>{t("percdis.benefits_list_second_title")}</h3>
          <ul>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_second_content_1")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_second_content_2")}
            </li>
          </ul>
          <h3>{t("percdis.benefits_list_third_title")}</h3>
          <ul>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_third_content_1")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.benefits_list_third_content_2")}
            </li>
          </ul>
          <br />
          <h1 className="title text-2xl font-bold text-blue-800" id="pre">
            {t("percdis.pre_main_title")}
          </h1>
          <br />
          <h2>{t("percdis.pre_sub_title")}</h2>
          <br />
          <ul>
            <li className="list-disc list-inside">
              {t("percdis.pre_content_1")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.pre_content_2")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.pre_content_3")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.pre_content_4")}
            </li>
            <li className="list-disc list-inside">
              {t("percdis.pre_content_5")}
            </li>
          </ul>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Discectomy;
