import Nav from "./Components/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";

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
    <html lang="en" className={roboto.className}>
      <body className="bg-[#ede6d7] flex flex-col h-screen w-full">
        <Nav/>
        <main className="flex flex-1">
        {children}
        </main>
      </body>
    </html>
  );
}
