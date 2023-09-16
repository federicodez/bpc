import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { Footer } from "@/app/components";

const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Radio = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Carousel index={3} />
        <Footer />
      </Suspense>
    </>
  );
};

export default Radio;
