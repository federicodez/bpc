import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingModel } from "@/app/components";
import { Footer } from "@/app/components";

const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });

const Medial = () => {
  return (
    <Suspense fallback={<LoadingModel />}>
      <Navbar />
      <Carousel index={2} />
      <Footer />
    </Suspense>
  );
};

export default Medial;
