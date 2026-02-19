import Link from "next/link";
import ContactBtn from "./ContactBtn";

const Footer = () => {
  return (
    <footer className="foot-color relative">
      <div className="footer__border border-t-1 border-b-1 border-black"></div>
      <div className="mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center">
            <figure className="my-4 ">
              <img
                src="/logo.png"
                alt=""
                className="mx-auto w-[60px] md:w-[88px] logo"
              />
            </figure>

            <div className="my-6">
              <Link
                className="nav__link mx-4 md:mx-6 font-bold"
                href="https://github.com/Nickspero"
                target="_blank"
              >
                Github
                <span className="underline"></span>
              </Link>
              <Link
                className="nav__link mx-4 md:mx-6 font-bold"
                href="https://www.linkedin.com/in/nickpappas99"
                target="_blank"
              >
                LinkedIn
                <span className="underline"></span>
              </Link>
              <Link className="nav__link mx-4 md:mx-6 font-bold" 
              href="/contact">
                Contact
                <span className="underline"></span>
              </Link>
              <Link
                className="nav__link mx-4 md:mx-6 font-bold"
                href="./TechRes.pdf"
                target="_blank"
              >
                Resume
                <span className="underline"></span>
              </Link>
            </div>

            <p className="text-[12px] font-bold mb-4 md:text-[16px]">
              Copyright &copy; 2026 Nicholas Pappas
            </p>

          </div>
        </div>
      </div>
      <ContactBtn/>
    </footer>
  );
};

export default Footer;
