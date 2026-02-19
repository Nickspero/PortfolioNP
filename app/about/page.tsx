"use client";
import Footer from "../Components/Footer";
import MyTech from "../Components/MyTech";

const page = () => {

  return (
    <div className="w-full">
      <div className="flex flex-col gap-12 md:gap-24">
        <div className="pt-8 px-8 mx-auto max-w-[1200px]">
          <div className="max-w-max">
            <h1 className="text-[40px] font-bold md:text-[60px]">
              About <span className="red">Me.</span>
            </h1>
            <div className="title__underline"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-24 md:flex-row">
            <div className="mt-[20px] text-[24px] flex flex-col gap-4 md:max-w-[50%]">
              <p className="text-[16px] md:text-[22px] lg:text-[24px] md:mt-[40px]">
                I'm a skilled{" "}
                <span className="red">Frontend Web Developer </span>
                passionate about turning designs into seamless web experiences
                that perform across all devices.
              </p>
              <p className="text-[16px] md:text-[22px] lg:text-[24px] md:mt-[40px]">
                My approach combines clean, efficient code with a strong focus
                on UI/UX, ensuring every interaction is{" "}
                <span className="red">
                  engaging, attention-grabbing, and frictionless.
                </span>
              </p>
            </div>
            <img className="about__img" src="/UX_UI.gif" alt="" />
          </div>

        </div>

        <MyTech />

        <div className=" px-8 mx-auto max-w-[1200px]">
          <div className="text-[40px] md:text-[60px] max-w-max mx-auto font-bold red">
            Adaptability
            <div className="title__underline"></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:gap-24 md:flex-row">
            <img className="about__img" src="/AI.gif" alt="" />
            <div className="md:mt-[20px] text-[24px] flex flex-col gap-4 md:max-w-[50%]">
              <p className="text-[16px] md:text-[22px] lg:text-[24px]">
                I embrace the rapid pace of the abrupt technological changes we
                see today, staying{" "}
                <span className="red">adaptable and curious</span> to quickly
                learn and apply new tools.
              </p>
              <p className="text-[16px] md:text-[22px] lg:text-[24px]">
                This allows me to create{" "}
                <span className="red">modern, high-performing</span> experiences
                and continually push the boundaries of user interaction.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
