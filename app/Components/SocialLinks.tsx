import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { darkMode } from "../store/useStore";

const SocialLinks = () => {
  const { dark } = darkMode()

  return (
    <div className={`flex mx-4 mb-6 justify-center items-center ${dark && "dark"} `}>
      <a
        href="https://www.linkedin.com/in/nickpappas99"
        target="_blank"
        className="btn bg-[#c64623] z-30 text-white w-10 h-10 text-xl mr-3 border border-black flex justify-center items-center rounded-full hover:scale-120 transform transition duration-300 active:scale-100"
      >
        <FaLinkedin/>
      </a>

      <a
        href="https://github.com/Nickspero"
        target="_blank"
        className="btn bg-[#c64623] z-30 text-white w-10 h-10 text-xl mr-3 border border-black flex justify-center items-center rounded-full hover:scale-120 transform transition duration-300 active:scale-100"
      >
       <FaGithub/>
      </a>

      <a
        href="./TechRes.pdf"
        target="_blank"
        className="btn bg-[#c64623] z-30 text-white w-10 h-10 text-xl border border-black flex justify-center items-center rounded-full hover:scale-120 transform transition duration-300 active:scale-100"
      >
        <FaFileAlt/>
      </a>
    </div>
  );
};

export default SocialLinks;
