import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "Bowen Pain Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src={`//maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}`}
        ></script>
      </head>
      <body className={`${poppins.className} ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
