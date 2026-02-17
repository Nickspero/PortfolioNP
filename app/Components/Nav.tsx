"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { openModal } from "../store/useStore";
import { darkMode } from "../store/useStore";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

const Nav = () => {
  const [hidden, setHidden] = useState(false);

  const { dark } = darkMode()

  const open = openModal((state) => state.open);
  const toggle = darkMode((state) => state.toggleDark);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    console.log(dark);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex px-4 justify-between sticky transition-opacity top-0 left-0 items-center ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"} ${dark && "dark"}`}
    >
      <figure className="w-[88px] h-[88px]">
        <Link href={"/"}>
          <img className="w-full h-full logo" src="/logo.png" alt="logo" />
        </Link>
      </figure>
      <div className="flex font-bold">
        <Link href="/about" className="nav__link mx-4">
          About Me
          <span className="underline"></span>
        </Link>
        <Link href="/projects" className="nav__link mx-4">
          Projects
          <span className="underline"></span>
        </Link>
        <div
          onClick={open}
          className="nav__link cursor-pointer mx-4"
        >
          Contact
          <span className="underline"></span>
        </div>
        <div onClick={toggle}>
          {dark ? (
            <FaToggleOn className="toggle-switch" />
          ) : (
            <FaToggleOff className="toggle-switch" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
