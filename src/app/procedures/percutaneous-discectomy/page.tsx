import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Discectomy = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="disectomy container flex flex-col  py-32 mx-auto justify-center">
          <h1 className="title">BENEFITS OF PERCUTANEOUS DISCECTOMY</h1>
          <h3>MINIMALLY INVASIVE</h3>
          <ul>
            <li className="list-disc list-inside">
              Performed using x-ray guidance
            </li>
            <li className="list-disc list-inside">
              Elimination of general anesthesia
            </li>
            <li className="list-disc list-inside">
              Elimination of complications that may result from open surgery
            </li>
          </ul>
          <h3>OUTPATIENT PROCEDURE</h3>
          <ul>
            <li className="list-disc list-inside">
              No overnight hospitalization required
            </li>
            <li className="list-disc list-inside">Lasts from 1-2 hours</li>
          </ul>
          <h3>RAPID RECOVERY TIME</h3>
          <ul>
            <li className="list-disc list-inside">
              Patients go home the same day of treatment
            </li>
            <li className="list-disc list-inside">
              Quick symptom relief within two weeks for most patients
            </li>
          </ul>
        </div>
      </Suspense>
    </>
  );
};

export default Discectomy;
