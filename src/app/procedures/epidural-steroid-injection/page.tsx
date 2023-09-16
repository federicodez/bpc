import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import { Footer } from "@/app/components";

const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Epidural = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Carousel index={0} />
        <Footer />
      </Suspense>
    </>
  );
};

export default Epidural;
