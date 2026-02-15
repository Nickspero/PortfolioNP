import Footer from "../Components/Footer";
import MyTech from "../Components/MyTech";

const page = () => {

  return (
    <div className="w-full">
      <div className="flex flex-col gap-24">
         <div className="pt-8 px-8 mx-auto max-w-[1200px]">
        <div className="max-w-max">
            <h1 className="text-[60px] font-bold">
              About <span className="text-[#c64623]">Me.</span>
            </h1>
            <div className="bg-[#c64623] w-full h-[1px]"></div>
          </div>
          <div className="flex justify-center gap-24">
            <div className="mt-[20px] max-w-[50%] text-[24px] flex flex-col gap-4">
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
            <img className="w-80" src="/UX_UI.gif" alt="" />
          </div>
        </div>

        <MyTech />

        <div className="pt-8 px-8 mx-auto max-w-[1200px]">
          <div className="text-[60px] max-w-max mx-auto font-bold text-[#c64623]">
            Adaptability
            <div className="bg-[#c64623] w-full h-[1px]"></div>
          </div>
          <div className="flex justify-center gap-24">
            <img className="w-80" src="/AI.gif" alt="" />
            <div className="mt-[20px] max-w-[50%] text-[24px] flex flex-col gap-4">
              <p>
                I embrace the rapid pace of the abrupt technological changes we
                see today, staying{" "}
                <span className="text-[#3bbad8]">adaptable and curious</span> to
                quickly learn and apply new tools.
              </p>
              <p>
                This allows me to create{" "}
                <span className="text-[#3bbad8]">modern, high-performing</span>{" "}
                experiences and continually push the boundaries of user
                interaction.
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
