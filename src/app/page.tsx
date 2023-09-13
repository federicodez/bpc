import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./dashboard/loading";

const Navbar = dynamic(() => import("@/app/components/navbar"), { ssr: false });
const About = dynamic(() => import("@/app/components/About"), { ssr: false });

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <About />
      </Suspense>
    </>
  );
};

export default Home;
