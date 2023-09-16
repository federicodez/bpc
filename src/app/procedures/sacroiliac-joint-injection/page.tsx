import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Sacroiliac = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="container contact py-10 sm:py-20 mx-auto justify-center">
          <Carousel index={4} />
        </div>
      </Suspense>
    </>
  );
};

export default Sacroiliac;
