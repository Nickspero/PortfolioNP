const MyTech = () => {
  const techStack = [
    {title: "HTML",
      img: "/html.png"
    },
    {title: "CSS",
      img: "/css.png"
    },
    {title: "JavaScript",
      img: "/javascript.png"
    },
    {title: "React",
      img: "/react.png"
    },
    {title: "Firebase",
      img: "/firebase.png"
    },
    {title: "NextJS",
      img: "/nextjs.png"
    },
    {title: "VS Code",
      img: "/VSCode.png"
    },
    {title: "Tailwind CSS",
      img: "/TailwindCSS.png"
    },
    {title: "Figma",
      img: "/figma.png"
    },
    {title: "Vue",
      img: "/vue.png"
    }
  ];

  return (
      <div className="tech__wrapper overflow-hidden">
        <div className="w-full tech__bg flex justify-center p-4">
          <div className="md:w-[70%]">
            <h1 className="text-[24px] md:text-[32px] font-bold">My Tech Stack:</h1>
            <div className="grid grid-cols-5 justify-items-center my-4 gap-4">
              {techStack.map((tech, index) => (
                <figure className="tech" key={index}>
                  <img className="tech__logo" src={tech.img} alt="" />
                  <p className="tech__name text-[12px] md:text-[16px]">{tech.title}</p>
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
