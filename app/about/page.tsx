import Footer from "../Components/Footer";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-24">

        <div className="mx-auto">
          <div className="max-w-max">
            <h1 className="text-[80px]">
              About <span className="text-[#c64623]">Me.</span>
            </h1>
            <div className="bg-[#c64623] w-full h-[1px]"></div>
          </div>

          <div className="flex">
            <div className="text max-w-[50%]">
              <p className="text-[20px] mt-[40px]">
                I'm a skilled{" "}
                <span className="text-[#3bbad8]">Frontend Web Developer </span>
                passionate about turning designs into seamless web experiences
                that perform across all devices.
              </p>
              <p className="text-[20px] mt-[40px]">
                My approach combines clean, efficient code with a strong focus
                on UI/UX, ensuring every interaction is{" "}
                <span className="text-[#3bbad8]">
                  engaging, attention-grabbing, and frictionless.
                </span>
              </p>
            </div>
            <div className="pic">image</div>
          </div>
        </div>

        <div className="w-full bg-[#3bbad8] flex justify-center p-6">
          <div className="w-[80%]">
            <h1 className="text-[40px] font-bold">My Tech Stack:</h1>
            <div className="grid grid-cols-5 justify-items-center gap-6">
              <figure className="tech">
                <img className="tech__logo" src="/html.png" alt="" />
                <p className="tech__name">HTML</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/css.png" alt="" />
                <p className="tech__name">CSS</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/javascript.png" alt="" />
                <p className="tech__name">JavaScript</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/react1.png" alt="" />
                <p className="tech__name">React</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/firebase.png" alt="" />
                <p className="tech__name">FireBase</p>
              </figure>
              <figure className="tech">
                <img
                  className="tech__logo"
                  src="/next_transparent.png"
                  alt=""
                />
                <p className="tech__name">NextJS</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/vsc.png" alt="" />
                <p className="tech__name">VS Code</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/tailwind.png" alt="" />
                <p className="tech__name">Tailwind CSS</p>
              </figure>
              <figure className="tech">
                <img className="tech__logo" src="/figma.png" alt="" />
                <p className="tech__name">Figma</p>
              </figure>
            </div>
          </div>
        </div>

        <div>text 2</div>

      </div>
      <Footer />
    </div>
  );
};

export default page;
