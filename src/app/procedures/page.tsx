import Image from "next/image";
import operation from "../images/alex-op2.jpeg";
import procedures from "../libs/procedures";
import Carousel from "../components/Carousel";

export default async function Procedures() {
  return (
    <div className="container py-20 mx-auto justify-center">
      <h1 className="title m-10 text-2xl text-center font-bold text-blue-800">
        OUR PROCEDURES
      </h1>
      <div className="grid justify-items-center gap-4 md:w-[800px] mx-auto my-10 grid-cols-1 md:grid-cols-2">
        <Image
          className="procedure-image object-contain w-96 h-full border-8 border-solid border-white 
          shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
          src={operation}
          priority={true}
          alt="procedure image"
        />
        <div>
          <p className="m-4">
            At Bowen Pain Center, our unwavering dedication lies in assisting
            patients through a comprehensive interventional pain management
            program. Embracing the forefront of medical progress, we offer
            advanced diagnosis and treatment techniques to ensure the best
            possible outcomes.
          </p>
          <p className="m-4">
            Our core mission at Bowen Pain Center is to relieve acute to chronic
            pain and foster improved health, comfort, and quality of life within
            a compassionate and collaborative environment. Through continuous
            research and innovative practices, we are committed to eradicting
            pain, all while working closely with each patient to provide the
            most suitable and personalized care.
          </p>
        </div>
      </div>
      <section>
        <Carousel {...procedures} />
      </section>
    </div>
  );
}
