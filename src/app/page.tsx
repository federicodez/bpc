import { prisma } from "@/db";

export default async function Home() {
  // const patients = await prisma.patient.findMany();
  return (
    <>
      <div className="container mx-auto p-4">
        <p className="ml-4 p-4">
          Thank you for visiting Bowen Pain Center. It is our goal to provide
          you with a high-standard of innovative and comprehensive treatments
          for pain and overall well-being.
        </p>
        <p className="ml-4 p-4">
          Our specialty trained and board certified pain physicians and staff
          make it a priority to treat the patient like family and address all
          issues in a timely, honest, and compassionate fashion.
        </p>
        <p className="ml-4 p-4">
          We encourage you to take the time to explore our website, call our
          office, and speak to our staff about how we can help you move forward
          in improving you quality of life.{" "}
          <strong>
            This is important to us, because at Bowen Pain Center Pain is
            Personal.
          </strong>
        </p>
        <h1 className="text-center font-bold">Mission Statement</h1>
        <p className="ml-4 p-4">
          Our mission at Bowen Pain Center is to provide an all encompassing
          experience that addresses our patients' needs and provides the highest
          quality of pain and wellness care available
        </p>
        <h1 className="text-center font-bold">Vision</h1>
        <p className="ml-4 p-4">
          Our vision is to establish ourselves as the top pain provider service
          in the region. We will accomplish our goal by operating with
          compassion, honesty, and a sense of family values so that our patients
          feel at home when allowing us to treat their illnesses.
        </p>
        <p className="ml-4 p-4">
          We seek to offer a wide variety of treatment options to better
          optimize our patients' pain and physical/mental state.
        </p>
        <h1 className="text-center font-bold">GET TO KNOW YOUR MD</h1>
        <h3 className="text-center font-bold">Meet Dr. Alexander Bowen</h3>
        <p className="ml-4 p-4">
          Dr. Bowen is a board certified attending Anesthesiologist and
          Interventional Pain Medicine Physician in the Metro New York City
          Area.
        </p>
        <p className="ml-4 p-4">
          Dr. Bowen attended Louisiana State University School of Medicine and
          completed his residecy at the University of Miami/ Jackson Memorial
          Hospital Health System in Miami, Florida. He was fellowship trained in
          interventional pain medicine at Columbia University. After finishing
          his fellowship, he began practicing anesthesiology and pain medicine
          in the greater New York City area.
        </p>
        <p className="ml-4 p-4">
          In his spare time, Dr. Bowen likes to play guitar (his specialty is
          twinkle twinkle little star), joggle, learn french, and cook.
        </p>
      </div>
      <p className="ml-4 text-center">68-38 Yellowstone Blvd, Suite BB1</p>
      <p className="text-center">Forest Hills, NY 11375</p>
      <p className="ml-4 text-center">
        Tel: (929) 334-4500 Fax: (877) 286-4105
      </p>
      <p className="ml-4 p-4 text-center">Bowen.PainCenter@gmail.com</p>
      <footer className="text-center text-white">
        @ 2020 Bowen Pain Center
      </footer>
    </>
  );
}
