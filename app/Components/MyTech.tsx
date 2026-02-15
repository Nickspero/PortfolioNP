const MyTech = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Firebase",
    "NextJS",
    "VS Code",
    "Tailwind CSS",
    "Figma",
    "Vue",
  ];

  return (
    <div className="border-y-5 border-t-[#3bbad8] border-b-[#3bbad8] shadow-2xl">
      <div className="border-y-5 border-t-[#c64623] border-b-[#c64623] overflow-hidden">
        <div className="w-full bg-[#3bbad8] flex justify-center p-4">
          <div className="w-[70%]">
            <h1 className="text-[32px] font-bold">My Tech Stack:</h1>
            <div className="grid grid-cols-5 justify-items-center gap-4">
              {techStack.map((tech, index) => (
                <figure className="tech" key={index}>
                  <img className="tech__logo" src={`/${tech}.png`} alt="" />
                  <p className="tech__name">{tech}</p>
                </figure>
              ))}
            </div>
            <p className="text-[24px] mt-6 text-right">And More!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTech;
