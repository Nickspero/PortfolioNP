import Link from "next/link";
import ContactBtn from "./ContactBtn";

const Footer = () => {
  return (
    <footer className="foot-color relative">
      <div className="w-full h-[8px] bg-[#377e80]"></div>
      <div className="w-full h-[8px] bg-[#c64623] border-t-1 border-b-1 border-[#ede6d7]"></div>
      <div className="mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center">
            <figure className="my-4">
              <img
                src="/logo.png"
                alt=""
                className="mx-auto w-[88px] logo"
              />
            </figure>

            <div className="my-6">
              <Link
                className="nav__link mx-6 font-bold"
                href="https://github.com/Nickspero"
                target="_blank"
              >
                Github
                <span className="underline"></span>
              </Link>
              <Link
                className="nav__link mx-6 font-bold"
                href="https://www.linkedin.com/in/nickpappas99"
                target="_blank"
              >
                LinkedIn
                <span className="underline"></span>
              </Link>
              <Link className="nav__link mx-6 font-bold" 
              href="/contact">
                Contact
                <span className="underline"></span>
              </Link>
              <Link
                className="nav__link mx-6 font-bold"
                href="./TechRes.pdf"
                target="_blank"
              >
                Resume
                <span className="underline"></span>
              </Link>
            </div>

            <p className="font-bold mb-4">
              Copyright &copy; 2026 Nicholas Pappas
            </p>

            <button className="click bg-transparent p-2 rounded-full">
              <i className="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
      <ContactBtn/>
    </footer>
  );
};

export default Footer;
