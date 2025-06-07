import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";


const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Merebnb",
  description: "Airbnb clone built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
