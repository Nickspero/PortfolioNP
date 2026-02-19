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
      <div className="tech__wrapper overflow-hidden">
        <div className="w-full tech__bg flex justify-center p-4">
          <div className="md:w-[70%]">
            <h1 className="text-[24px] md:text-[32px] font-bold">My Tech Stack:</h1>
            <div className="grid grid-cols-5 justify-items-center my-4 gap-4">
              {techStack.map((tech, index) => (
                <figure className="tech" key={index}>
                  <img className="tech__logo" src={`/${tech}.png`} alt="" />
                  <p className="tech__name">{tech}</p>
                </figure>
              ))}
            </div>
            <p className="text-[24px] md:text-[32px] text-right">And More!</p>
          </div>
        </div>
      </div>
  );
};

export default MyTech;
