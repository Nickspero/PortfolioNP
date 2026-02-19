"use client";
import { IoIosMail } from "react-icons/io";
import { openModal } from "../store/useStore";
import { darkMode } from "../store/useStore";

const ContactBtn = () => {
  const open = openModal((state) => state.open);
  const { dark } = darkMode();

  return (
    <a
      href="#"
      onClick={open}
      className=" btn z-30 w-[40px] h-[40px] md:w-[70px] md:h-[70px] text-[40px] flex justify-center items-center rounded-full border-[1px] border-black bg-[#c64623] text-white absolute bottom-4 right-4 hover:scale-110 cursor-pointer transform transition duration-300 active:scale-100"
    >
      <IoIosMail className="w-[24px] md:w-[40px]"/>
    </a>
  );
};

export default ContactBtn;
