import Link from "next/link";
import { CgDarkMode } from "react-icons/cg";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mx-4">
      <figure className="w-[88px] h-[88px]">
        <img className="w-full h-full" src="/logo.png" alt="logo" />
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
        <Link href="/contact" className="relative mx-4 inline-block group">
          Contact
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <CgDarkMode className="cursor-pointer w-6 h-6 mx-4 hover:scale-125 transform transition duration-300" />
      </div>
    </nav>
  );
};

export default Nav;
