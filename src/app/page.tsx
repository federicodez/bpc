import Image from "next/image";
import profilePic from "./images/profilePic.jpg";
import operation from "./images/alex-op3.jpeg";

export default async function Home() {
  return (
    <>
      <Image
        className="operation pt-10 object-center"
        src={operation}
        priority={true}
        alt="operation picture"
      />
      <div className="container mx-auto">
        <p className="m-4 mx-10">
          Welcome to Bowen Pain Center. Our mission is to deliver top-notch,
          innovative, and comprehensive pain treatments, ensuring your overall
          well-being is prioritized.
        </p>
        <p className="m-4 mx-10">
          Our team consists of specialty-trained and board-certified pain
          physicians and staff who are dedicated to treating every patient like
          family. We take pride in addressing all concerns with honesty,
          compassion, and efficiency.
        </p>
        <p className="m-4 mx-10">
          We invite you to browse through our website, reach out to our office,
          and have a conversation with our staff about how we can assist you in
          enhancing your quality of life. At Bowen Pain Center, we understand
          that pain is a personal experience, and we are commiteed to helping
          you through it.
        </p>
        <h1 className="linethrough m-10 text-center text-2xl font-bold text-blue-800">
          MISSION STATEMENT
        </h1>
        <p className="m-4 mx-10">
          At Bowen Pain Center, our mission is to create a comprehensive
          experience that caters to our patients&apos; needs, delivering the
          highest standard of pain and wellness care possible.
        </p>
        <p className="m-4 mx-10">
          <strong>At Bowen Pain Center, pain is personal.</strong>
        </p>
        <h1 className="linethrough m-10 text-center text-2xl font-bold text-blue-800">
          VISION
        </h1>
        <p className="m-4 mx-10">
          Our vision is to establish ourselves as the top pain provider service
          in the region. We will accomplish our goal by operating with
          compassion, honesty, and a sense of family values so that our patients
          feel at home when allowing us to treat their illnesses.
        </p>
        <p className="m-4 mx-10">
          We seek to offer a wide variety of treatment options to better
          optimize our patients&apos; pain and physical/mental state.
        </p>
        <h1 className="linethrough m-10 text-center text-2xl my-4 font-bold text-blue-800">
          GET TO KNOW YOUR MD
        </h1>
        <div className="grid m-10 grid-cols-1 gap-4 md:grid-cols-2 lg:mx-80">
          <Image
            className="profile-image object-contain w-auto h-auto border-8 border-white drop-shadow-lg lg:w-96"
            src={profilePic}
            alt="profile picture"
          />
          <div>
            <h3 className="font-bold text-center md:text-left">
              Meet Dr. Alexander Bowen
            </h3>
            <p className="mt-4">
              Dr. Bowen is a board certified Anesthesiologist and Interventional
              Pain Management Physician in the Metro New York City Area.
            </p>
            <p className="mt-4">
              Dr. Bowen attended Louisiana State University School of Medicine
              and completed his residecy at the University of Miami/ Jackson
              Memorial Hospital Health System in Miami, Florida. He was
              fellowship trained in interventional pain management at Columbia
              University. After finishing his fellowship, he began practicing
              anesthesiology and pain management in the greater New York City
              area.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
