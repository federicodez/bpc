import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Medial = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="container contact py-10 sm:py-20 mx-auto justify-center">
          <h1>Medial Branch Block</h1>
        </div>
      </Suspense>
    </>
  );
};

export default Medial;
