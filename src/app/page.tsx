import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingModel } from "@/app/components";

const Navbar = dynamic(() => import("@/app/components/navbar/Navbar"), {
  ssr: false,
});
const About = dynamic(() => import("@/app/components/About"), { ssr: false });

const Home = () => {
  return (
    <Suspense fallback={<LoadingModel />}>
      <Navbar />
      <About />
    </Suspense>
  );
};

export default Home;
