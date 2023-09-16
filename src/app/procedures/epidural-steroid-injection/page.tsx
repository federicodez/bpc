import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Epidural = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="container contact py-10 sm:py-20 mx-auto justify-center">
          <Carousel index={0} />
        </div>
      </Suspense>
    </>
  );
};

export default Epidural;
