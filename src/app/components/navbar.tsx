"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav className="w-full fixed z-10 bg-blue-950 top-0 left-0 right-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold sm:text-2xl sm:text-white sm:font-bold">
                  Bowen Pain Center
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  onClick={() => setActive(!active)}
                  className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                >
                  {active ? (
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 40 40"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={5}
                      stroke="white"
                      fill="transparent"
                    >
                      <path
                        className="close-x"
                        d="M 10,10 L 30,30 M 30,10 L 10,30"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      x-show="!showMenu"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
                active
                  ? "border-t-2 pt-8 md:border-none md:h-fit md:p-0 block"
                  : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link href="/" onClick={() => setActive(!active)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link href="/procedures" onClick={() => setActive(!active)}>
                    Procedure
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-left">
                  <Link href="/contact" onClick={() => setActive(!active)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
