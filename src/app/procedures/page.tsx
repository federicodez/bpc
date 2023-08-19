import Image from "next/image";
import operation from "../images/alex-op2.jpeg";
import procedures from "../libs/procedures";
import Carousel from "../components/Carousel";

export default async function Procedures() {
  return (
    <div className="procedures m-auto pt-20 justify-center">
      <h1 className="linethrough m-20 text-2xl text-center font-bold text-white">
        OUR PROCEDURES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-80">
        <Image
          className="procedure-image object-contain w-auto h-auto border-8 border-white drop-shadow-lg lg:w-96"
          src={operation}
          priority={true}
          alt="procedure image"
        />
        <div>
          <p className="m-4 text-white">
            At Bowen Pain Center, our unwavering dedication lies in assisting
            patients through a comprehensive interventional pain management
            program. Embracing the forefront of medical progress, we offer
            advanced diagnosis and treatment techniques to ensure the best
            possible outcomes.
          </p>
          <p className="m-4 text-white">
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
