import dynamic from "next/dynamic";

const About = dynamic(() => import("@/app/components/About"), { ssr: false });

const Home = () => {
  return <About />;
};

export default Home;
