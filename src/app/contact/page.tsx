import Navbar from "../navbar";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function submitContact(data: FormData) {
  "use server";
  const firstName = data.get("firstName")?.valueOf();
  const lastName = data.get("lastName")?.valueOf();
  const phone = data.get("phone")?.valueOf();
  const email = data.get("email")?.valueOf();

  console.log(firstName, lastName, phone, email);

  if (typeof firstName !== "string" || firstName.length === 0) {
    throw new Error("Invalid First Name");
  }
  if (typeof lastName !== "string" || lastName.length === 0) {
    throw new Error("Invalid Last Name");
  }
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("Invalid Email");
  }
  if (typeof phone !== "string" || phone.length === 0) {
    throw new Error("Invalid Phone Number");
  }

  await prisma.patient.create({ data: { firstName, lastName, phone, email } });
  redirect("/");
}

export default function Page() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-center text-white">Contact Us</h1>
      <form action={submitContact} className="px-4 py-3">
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
        />
        <input
          placeholder="Phone Number"
          type="text"
          name="phone"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-slate-300 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
