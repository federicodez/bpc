import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-center space-x-4 text-white">
        <Link
          href="/"
          className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Contact Us
        </Link>
        <Link
          href="/login"
          className="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Sign Up / Login
        </Link>
      </nav>
      <h1 className="text-3xl font-bold flex justify-center text-white">
        Bowen Pain Center
      </h1>
    </header>
  );
}
