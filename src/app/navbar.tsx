import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="flex justify-center space-x-4">
        <Link
          href="/"
          className="font-bold text-white px-3 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900"
        >
          Home
        </Link>
        <Link
          href="/procedures"
          className="font-bold text-white px-3 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900"
        >
          Procedures
        </Link>
        <Link
          href="/contact"
          className="font-bold text-white px-3 py-2 rounded-lg hover:bg-slate-300 hover:text-slate-900"
        >
          Contact Us
        </Link>
      </nav>
      <h2 className="text-3xl text-white font-bold flex justify-center mx-auto p-2">
        Bowen Pain Center
      </h2>
      <h3 className="text-1xl text-white font-bold flex justify-center mx-auto p-2">
        Interventional Pain Management
      </h3>
    </div>
  );
}
