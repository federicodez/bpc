import { prisma } from "@/db";
import Navbar from "./navbar";

export default async function Home() {
  const patients = await prisma.patient.findMany();
  console.log(patients);
  return (
    <>
      <Navbar />
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}></li>
        ))}
      </ul>
    </>
  );
}
