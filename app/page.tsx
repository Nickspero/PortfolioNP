"use client"
import Link from "next/link";
import Television from "./Components/Television";
import SocialLinks from "./Components/SocialLinks";
import ContactBtn from "./Components/ContactBtn";
import Shapes from "./Components/Shapes";
import { darkMode } from "./store/useStore";

export default function Home() {
  const { dark } = darkMode()

  return (
    <div className={`border-8 ${dark? "red__border": "blue__border"} max-w-max max-h-max rounded-3xl mx-auto mt-[40px]`}>
      <div className={`border-8 ${dark? "blue__border" : "red__border"} rounded-2xl`}>
        <div className="p-4 flex justify-center items-center">
          <Television />
          <div className="ml-6 leading-tight">
            <h1 className={`text-[120px] font-bold ${dark && "text-white"}`}>Hey!</h1>
            <h1 className={`text-[120px] font-bold ${dark? "blue": "red"}`}>I'm Nick.</h1>
            <p className={`max-w-[500px] text-[24px] ${dark && "text-white"}`}>
              I'm a Frontend Web Developer skilled in crafting responsive,
              user-friendly interfaces with clean, efficient code.
            </p>
            <p className={`max-w-[500px] text-[24px] mt-4 ${dark && "text-white"}`}>
              Here's a bit more
              <Link className={`font-bold ${dark? "blue": "red"} relative z-30 cursor-pointer`} href={"/about"}>
                {" "}
                about me.
              </Link>
            </p>
          </div>
        </div>
        <SocialLinks />
      </div>
      <ContactBtn />
      <Shapes />
    </div>
  );
}
