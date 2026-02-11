const Footer = () => {
  return (
    <footer className="bg-[#377e80] relative">
      <div className="w-full h-[8px] bg-[#377e80]"></div>
      <div className="w-full h-[8px] bg-[#c64623] border-t-1 border-b-1 border-[#ede6d7]"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center">
            <figure className="mb-4">
              <img
                id="personal-logo"
                src="/logo-border.png"
                alt=""
                className="mx-auto w-[88px]"
              />
            </figure>

            <div className="my-6">
              <a
                className="mx-6 font-bold text-black hover:underline"
                href="https://github.com/Nickspero"
                target="_blank"
              >
                Github
              </a>
              <a
                className="mx-6 font-bold text-black hover:underline"
                href="https://www.linkedin.com/in/nickpappas99"
                target="_blank"
              >
                LinkedIn
              </a>
              <a className="mx-6 font-bold text-black hover:underline">
                Contact
              </a>
              <a
                className="mx-6 font-bold text-black hover:underline"
                href="./TechRes.pdf"
                target="_blank"
              >
                Resume
              </a>
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
    </footer>
  );
};

export default Footer;
