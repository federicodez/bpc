import Navbar from "../navbar";

async function submitContact(data: any) {
  "use server";
  console.log(data);
}

export default function Page() {
  return (
    <>
      <Navbar />
      <header className="flex justify-center mb-4">
        <h1 className="text-2xl">Contact Us</h1>
      </header>
      <form action={submitContact} className="px-4 py-3">
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          className="form-input border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          className="form-input border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          placeholder="Phone Number"
          type="tel"
          name="tel"
          className="form-tel border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          className="form-email border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-slate-800 text-slate-800 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
