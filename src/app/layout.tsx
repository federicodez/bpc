import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar, Footer } from "@/app/components";
import Script from "next/script";

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
      <body className={`${poppins.className} ${inter.className}`}>
        <Script
          async
          defer
          type="text/javascript"
          src={`//maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        ></Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
