"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { useTranslation } from "react-i18next";
import { Footer } from "@/app/components";

const Form = dynamic(() => import("@/app/components/Form"), { ssr: false });
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });
const Map = dynamic(() => import("@/app/components/Map"), {
  loading: () => (
    <button type="button" disabled>
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
      Loading...
    </button>
  ),
  ssr: false,
});

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="container contact py-10 sm:py-20 mx-auto justify-center">
          <h1 className="title m-10 text-2xl text-center font-bold text-blue-800">
            {t("contact.title")}
          </h1>
          <Form />
          <div className="grid mt-6 md:grid-cols-3">
            <a
              href="mailto:bowen.paincenter@gmail.com"
              className="text-center my-3 underline"
            >
              Bowen.PainCenter@gmail.com
            </a>
            <div className="block">
              <address className="text-center">
                68-38 Yellowstone Blvd, Suite BB1
                <br />
                Forest Hills, NY 11375
              </address>
            </div>
            <div className="block">
              <p className="text-center">
                Tel: (929) 334-4500
                <br />
                Fax: (877) 286-4105
              </p>
            </div>
          </div>
          <div className="container map h-[410px] mx-auto my-5 border-8 border-solid border-white shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
            <Map />
          </div>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default ContactUs;
