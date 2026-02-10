import Link from "next/link";
import Television from "./Components/Television";
import SocialLinks from "./Components/SocialLinks";

export default function Home() {
  return (
    <div className="border-8 border-[#3bbad8] max-w-max max-h-max rounded-3xl mx-auto mt-[40px]">
      <div className="border-8 border-[#c64623] rounded-2xl">
        <div className="p-4 flex justify-center items-center">
          <Television />
          <div className="ml-6 leading-tight">
            <h1 className="text-[120px] font-bold">Hey!</h1>
            <h1 className="text-[120px] font-bold text-[#c64623]">I'm Nick.</h1>
            <p className="max-w-[500px] text-[24px]">
              I'm a Frontend Web Developer skilled in crafting responsive,
              user-friendly interfaces with clean, efficient code.
            </p>
            <p className="max-w-[500px] text-[24px] mt-4"> 
                Here's a bit more
                <Link className="font-bold text-[#c64623]" href={"/about"}>
                  {" "}
                  about me.
                </Link>
            </p>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}
