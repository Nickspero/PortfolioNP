"use client"
import Nav from "./Components/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";
import Contact from "./Components/Contact";
import { darkMode } from "./store/useStore";

const roboto = Roboto({ subsets: ["latin"], weight: ["400","500","700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { dark } = darkMode()

  return (
    <html lang="en" className={`${roboto.className} scroll-smooth`}>
      <body className={`bg-[#ede6d7] ${dark && "dark"}`}>
        <main className="w-full relative h-screen">
        <Contact/>
        <Nav/>
        {children}
        </main>
      </body>
    </html>
  );
}
