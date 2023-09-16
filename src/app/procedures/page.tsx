import procedures from "@/app/libs/procedures";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
import dynamic from "next/dynamic";
import { Footer } from "@/app/components";
const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });
const Carousel = dynamic(() => import("@/app/components/Carousel"), {
  ssr: false,
});

const Procedures = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Carousel title={""} content={""} {...procedures} />
        <Footer />
      </Suspense>
    </>
  );
};

export default Procedures;
