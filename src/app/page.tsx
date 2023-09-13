import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./dashboard/loading";

const About = dynamic(() => import("@/app/components/About"), { ssr: false });

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    </>
  );
};

export default Home;
