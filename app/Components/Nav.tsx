"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { openModal } from "../store/useStore";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

const Nav = () => {
  const [hidden, setHidden] = useState(false);

  const open = openModal((state) => state.open)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full flex px-4 justify-between sticky transition-opacity top-0 left-0 items-center ${hidden? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <figure className="w-[88px] h-[88px]">
        <Link href={"/"}>
        <img className="w-full h-full" src="/logo.png" alt="logo" />
        </Link>
      </figure>
      <div className="flex font-bold">
        <Link href="/about" className="relative mx-4 inline-block group">
          About Me
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link href="/projects" className="relative mx-4 inline-block group">
          Projects
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <div onClick={open} className="relative mx-4 inline-block group cursor-pointer">
          Contact
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </div>
        <FaToggleOff className="cursor-pointer w-6 h-6 mx-4 hover:scale-125 transform transition duration-300" />
      </div>
    </nav>
  );
};

export default Nav;
