import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingModel } from "@/app/components";
import { Footer } from "@/app/components";

const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });
const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});

const Procedures = async () => {
  return (
    <Suspense fallback={<LoadingModel />}>
      <Navbar />
      <Carousel index={2} />
      <Footer />
    </Suspense>
  );
};

export default Procedures;
