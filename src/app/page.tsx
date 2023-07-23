import { prisma } from "@/db";
import Navbar from "./navbar";

export default async function Home() {
  const patients = await prisma.patient.findMany();
  // await prisma.patient.create({
  //   data: {
  //     firstname: "fede",
  //     lastname: "jimenez",
  //     email: "jfederi.coder@gmail.com",
  //     number: "504-421-5995",
  //   },
  // });

  return (
    <>
      <Navbar />
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {`Name: ${patient.firstname} ${patient.lastname}`}
            {`Email: ${patient.email}`}
            {`Phone Number: ${patient.number}`}
          </li>
        ))}
      </ul>
    </>
  );
}
