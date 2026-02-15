import Nav from "./Components/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";
import Contact from "./Components/Contact";
import Shapes from "./Components/Shapes";

const roboto = Roboto({ subsets: ["latin"], weight: ["400","500","700"] });

export const metadata = {
  title: 'Nick Pappas Portfolio',
  description: 'Next.js + Tailwind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} scroll-smooth`}>
      <body className="bg-[#ede6d7]">
        <main className="w-full relative h-screen">
        <Contact/>
        <Nav/>
        {children}
        </main>
      </body>
    </html>
  );
}
