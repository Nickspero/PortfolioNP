"use client"
import Link from "next/link";
import Television from "./Components/Television";
import SocialLinks from "./Components/SocialLinks";
import ContactBtn from "./Components/ContactBtn";
import Shapes from "./Components/Shapes";

export default function Home() {

  return (
    <div className="border-8 blue__border max-w-max max-h-max rounded-3xl mx-auto md:mt-[40px]">
      <div className="border-8 red__border rounded-2xl">
        <div className="p-4 w-full flex flex-col justify-center items-center md:flex-row">
          <Television />
          <div className="l-6 leading-tight ">
            <h1 className="text-[60px] md:text-[100px] font-bold text-center md:text-start">Hey!</h1>
            <h1 className="text-[60px] md:text-[100px] font-bold red text-center md:text-start">I'm Nick.</h1>
            <p className="max-w-[500px] text-[20px] md:text-[24px]">
              I'm a Frontend Web Developer skilled in crafting responsive,
              user-friendly interfaces with clean, efficient code.
            </p>
            <p className="max-w-[500px] text-[20px] md:text-[24px] mt-4">
              Here's a bit more
              <Link className="font-bold red relative z-30 cursor-pointer" href={"/about"}>
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
