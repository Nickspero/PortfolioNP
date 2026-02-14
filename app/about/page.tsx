import Footer from "../Components/Footer";
import MyTech from "../Components/MyTech";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-24">
        <div className="pt-8 pr-8 pl-8 mx-auto max-w-[1200px]">
          <div className="max-w-max">
            <h1 className="text-[80px]">
              About <span className="text-[#c64623]">Me.</span>
            </h1>
            <div className="bg-[#c64623] w-full h-[1px]"></div>
          </div>

          <div className="flex relative">
            <div className="text w-[50%]">
              <p className="text-[24px] mt-[40px]">
                I'm a skilled{" "}
                <span className="text-[#3bbad8]">Frontend Web Developer </span>
                passionate about turning designs into seamless web experiences
                that perform across all devices.
              </p>
              <p className="text-[24px] mt-[40px]">
                My approach combines clean, efficient code with a strong focus
                on UI/UX, ensuring every interaction is{" "}
                <span className="text-[#3bbad8]">
                  engaging, attention-grabbing, and frictionless.
                </span>
              </p>
            </div>
            <div className="w-[50%] relative">
              <img
                className="w-150 absolute top-[-160px] right-0"
                src="/uxui2.gif"
                alt=""
              />
            </div>
          </div>
        </div>

        <MyTech />

        <div className="pt-8 pr-8 pl-8 mx-auto max-w-[1200px]">
          <h1 className="text-[60px] text-center font-bold text-[#c64623]">
            Adaptability
          </h1>
          <div className="mt-[20px] text-[24px] max-w-[1000px] text-center flex flex-col gap-4">
            <p>
              Technology is advancing at an exponential pace, transforming how
              we work, communicate, and experience the web.
            </p>
            <p>
              I stay adaptable and curious, quickly learning and applying new
              tools to create modern, high-performing experiences.
            </p>
            <p>
              For me, rapid change is an opportunity to innovate and push the
              boundaries of what users can interact with.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default page;
