const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
      <h1 className="text-[80px]">
        About <span className="text-[#c64623]">Me.</span>
      </h1>
      <p className="max-w-[800px]">
        I'm a skilled{" "}
        <span className="font-bold text-[#3bbad8]">Frontend Web Developer</span>{" "}
        passionate about turning designs into seamless web experiences that
        perform across all devices.
      </p>
      <br />
      <p className="max-w-[800px]">
        My approach combines clean, efficient code with a strong focus on UI/UX,
        ensuring every interaction is{" "}
        <span className="font-bold text-[#3bbad8]">
          engaging, attention-grabbing, and frictionless.
        </span>
      </p>
      </div>
    </div>
  );
};

export default page;
