"use client"
import { IoIosMail } from "react-icons/io";
import { openModal } from "../store/useStore";

const ContactBtn = () => {
  const open = openModal((state) => state.open)

  return (
    <a href="#" onClick={open} className="w-[70px] h-[70px] text-[40px] flex justify-center items-center rounded-full border-[1px] border-black bg-[#c64623] text-white absolute bottom-4 right-4 hover:scale-110 cursor-pointer transform transition duration-300 active:scale-100"> 
        <IoIosMail />
      </a>
  )
}

export default ContactBtn
