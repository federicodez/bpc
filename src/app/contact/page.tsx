import dynamic from "next/dynamic";
import sendEmail from "@/app/libs/email";

const Map = dynamic(() => import("@/app/components/Map"), {
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

  await sendEmail({
    to: "jfedericodes@gmail.com",
    subject: "Bowen Pain Center New Patient",
    text: `Name: ${firstName} ${lastName} Phone: ${phone} Email: ${email} Message: ${message}`,
  });
}

export default function ContactUs() {
  return (
    <div className="container contact py-10 sm:py-20 mx-auto justify-center">
      <h1 className="title m-10 text-2xl text-center font-bold text-blue-800">
        CONTACT US
      </h1>
      <form
        action={submitContact}
        className="container p-5 mx-auto border-8 border-solid border-white shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ken"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Adams"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="555-555-5555"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ken.adams@company.com"
              required
            />
          </div>
        </div>
        <div className="mb-6 mx-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Message
        </button>
      </form>
      <div className="grid mt-6 md:grid-cols-3">
        <a
          href="mailto:bowen.paincenter@gmail.com"
          className="text-center my-3 underline"
        >
          Bowen.PainCenter@gmail.com
        </a>
        <div className="block">
          <address className="text-center">
            68-38 Yellowstone Blvd, Suite BB1
            <br />
            Forest Hills, NY 11375
          </address>
        </div>
        <div className="block">
          <p className="text-center">
            Tel: (929) 334-4500
            <br />
            Fax: (877) 286-4105
          </p>
        </div>
      </div>
      <div className="container map h-[420px] mx-auto my-5 border-8 border-solid border-white shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(255,255,255),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
        <Map />
      </div>
    </div>
  );
}
