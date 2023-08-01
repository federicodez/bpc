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
        <p className="m-4">
          Welcome to Bowen Pain Center. Our mission is to deliver top-notch,
          innovative, and comprehensive pain treatments, ensuring your overall
          well-being is prioritized.
        </p>
        <p className="m-4">
          Our team consists of specialty-trained and board-certified pain
          physicians and staff who are dedicated to treating every patient like
          family. We take pride in addressing all concerns with honesty,
          compassion, and efficiency.
        </p>
        <p className="m-4">
          We invite you to browse through our website, reach out to our office,
          and have a conversation with our staff about how we can assist you in
          enhancing your quality of life. At Bowen Pain Center, we understand
          that pain is a personal experience, and we are commiteed to helping
          you through it.
        </p>
        <h1 className="linethrough m-10 text-center text-2xl font-bold">
          Mission Statement
        </h1>
        <p className="m-4">
          At Bowen Pain Center, our mission is to create a comprehensive
          experience that caters to our patients&apos; needs, delivering the
          highest standard of pain and wellness care possible.
        </p>
        <p className="m-4">
          <strong>At Bowen Pain Center, pain is personal.</strong>
        </p>
        <h1 className="linethrough m-10 text-center text-2xl font-bold">
          Vision
        </h1>
        <p className="m-4">
          Our vision is to establish ourselves as the top pain provider service
          in the region. We will accomplish our goal by operating with
          compassion, honesty, and a sense of family values so that our patients
          feel at home when allowing us to treat their illnesses.
        </p>
        <p className="m-4">
          We seek to offer a wide variety of treatment options to better
          optimize our patients&apos; pain and physical/mental state.
        </p>
        <h1 className="linethrough m-10 text-center text-2xl my-4 font-bold">
          GET TO KNOW YOUR MD
        </h1>
        <div className="grid m-10 grid-cols-1 md:grid-cols-3">
          <Image
            className="profile-image object-contain md:object-right"
            src={profilePic}
            alt="profile picture"
          />
          <div className="text-center m-4 md:col-span-2 md:text-left">
            <p className="font-bold">Meet Dr. Alexander Bowen</p>
            <p className="mt-4">
              Dr. Bowen is a board certified attending Anesthesiologist and
              Interventional Pain Medicine Physician in the Metro New York City
              Area.
            </p>
            <p className="mt-4">
              Dr. Bowen attended Louisiana State University School of Medicine
              and completed his residecy at the University of Miami/ Jackson
              Memorial Hospital Health System in Miami, Florida. He was
              fellowship trained in interventional pain medicine at Columbia
              University. After finishing his fellowship, he began practicing
              anesthesiology and pain medicine in the greater New York City
              area.
            </p>
            <p className="mt-4">
              In his spare time, Dr. Bowen likes to play the guitar (his
              specialty is &quot;Twinkle, Twinkle, Little Star&quot;), juggling,
              learning french, and cooking.
            </p>
          </div>
        </div>
      </div>
      <footer className="text-center">@ 2020 Bowen Pain Center</footer>
    </>
  );
}
