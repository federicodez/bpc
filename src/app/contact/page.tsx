import { prisma } from "@/db";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { sendEmail } from "../../components/email";

const Map = dynamic(() => import("../../components/Map"), {
  loading: () => (
    <button type="button" disabled>
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
      Loading...
    </button>
  ),
  ssr: false,
});

async function submitContact(data: FormData) {
  "use server";
  const firstName = data.get("firstName")?.valueOf();
  const lastName = data.get("lastName")?.valueOf();
  const phone = data.get("phone")?.valueOf();
  const email = data.get("email")?.valueOf();
  const message = data.get("message")?.valueOf();

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
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Invalid Message");
  }

  await prisma.patient.create({
    data: { firstName, lastName, phone, email, message },
  });

  await sendEmail({
    to: "jfedericodes@gmail.com",
    subject: "Bowen Pain Center New Patient",
    text: `Name: ${firstName} ${lastName} Phone: ${phone} Email: ${email} Message: ${message}`,
  });
  redirect("/");
}

export default function ContactUs() {
  return (
    <>
      <h1 className="linethrough text-2xl text-center pt-20 pb-4">
        Contact Us
      </h1>
      <form action={submitContact}>
        <div className="grid gap-6 mx-4 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-black"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-black"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="555-555-5555"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
        </div>
        <div className="mb-6 mx-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-black"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="grid mt-6 md:grid-cols-3">
        <p className="mx-auto my-3">Bowen.PainCenter@gmail.com</p>
        <div className="block">
          <p className="ml-4 text-center">68-38 Yellowstone Blvd, Suite BB1</p>
          <p className="text-center">Forest Hills, NY 11375</p>
        </div>
        <div className="block">
          <p className="ml-4 text-center">Tel: (929) 334-4500</p>
          <p className="ml-4 text-center">Fax: (877) 286-4105</p>
        </div>
      </div>
      <div className="container map mx-auto py-10">
        <Map />
      </div>
      <footer className="text-center">@ 2020 Bowen Pain Center</footer>
    </>
  );
}
