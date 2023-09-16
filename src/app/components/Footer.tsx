import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#03045e] text-white text-center">
      <Link href="/procedures">Procedures</Link>
      <p>
        @2020 Bowen Pain Center
        <br />
        All rights reserved &copy;
      </p>
    </footer>
  );
}
