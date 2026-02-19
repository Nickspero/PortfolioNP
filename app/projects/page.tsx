"use client";
import Footer from "../Components/Footer";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


const page = () => {

  const projects = [
    {
      img: "/skinstric.png",
      longImg: "/skinstricLong.png",
      title: "Skinstric",
      desc: "Cutting edge A.I. application that creates a highly-personalized routine tailored to what your skin needs via a visual scan of your face.",
      link: "https://skinstric-nine-sand.vercel.app/",
      tech: "NextJS, CSS, Figma",
      git: "https://github.com/Nickspero/Skinstric",
      column: 1,
      row: 2,
      logo: "/skinlogo.png",
    },
    {
      img: "/nft.png",
      longImg: "/nftLong.png",
      title: "Ultraverse NFT",
      desc: "Ultraverse NFT Market is a platform created to showcase and sell NFTs from various artists. Users can explore diverse NFT collections, view creator profiles, and check out top sellers.",
      link: "https://nick-pappas-internship.vercel.app/",
      tech: "React, CSS",
      git: "https://github.com/Nickspero/NickPappas-Internship",
      column: 1,
      row: 1,
      logo: "/nftlogo.png",
    },
    {
      img: "/omdb.png",
      longImg: "/omdb.png",
      title: "OMDb",
      desc: "This sleek movie database updates daily with fresh film information. Easily search thousands of titles and dive into rich details—reviews, ratings, plot summaries, cast lists, and more—all in one place.",
      link: "https://omdb-flame.vercel.app/",
      tech: "React, CSS",
      git: "https://github.com/Nickspero/OMDb-React",
      column: 2,
      row: 1,
      logo: "/omdblogo.png",
    },
    {
      img: "/summarist.png",
      longImg: "/summaristLong.png",
      title: "Summarist",
      desc: "Book summary service with fully functioning Audio Playback, Firebase Authentication, and Stripe Payment Integration. Get quick summaries of some of the most popular book titles of the last decade!",
      link: "https://summarist-cyan.vercel.app/",
      tech: "NextJS, CSS",
      git: "https://github.com/Nickspero/summarist",
      column: 1,
      row: 1,
      logo: "/sumlogo.png",
    },
    {
      img: "/treact.png",
      longImg: "/treactLong.png",
      title: "Treact",
      desc: "Treact offers beautiful, modular React templates that are easy to set up, customize, and deploy — complete with features like pricing plans (Personal, Business, Enterprise), trustworthy service highlights, and a simple register-download-run workflow.",
      link: "https://nickspero.github.io/Treact-Project/",
      tech: "HTML, CSS, VanillaJS",
      git: "https://github.com/Nickspero/Treact-Project",
      column: 1,
      row: 1,
      logo: "/trelogo.png",
    },
    {
      img: "/library.png",
      longImg: "/libraryLong.png", 
      title: "Library",
      desc: "A mock e-commerce-style “Library” site offering an online platform to buy books. Featuring over 10,000 titles in various categories, with featured bestsellers and latest releases.",
      link: "https://library-react-seven-steel.vercel.app/",
      tech: "React, CSS",
      git: "https://github.com/Nickspero/Library-React",
      column: 1,
      row: 1,
      logo: "/liblogo.png",
    },
  ];

  return (
    <div className="h-full">
      <div className="p-4">
        <div className="mx-auto w-max flex flex-col justify-center items-center">
          <h1 className="font-bold text-[32px] md:text-[60px] red">
            Some of My Projects
          </h1>
          <p className="text-[16px] md:text-[24px] red">
            Code, Design, and everything in between.
          </p>
          <div className="title__underline mt-3"></div>
        </div>
        <div className="w-full hidden max-w-[1500px] mx-auto mt-8 mb-8 md:mb-[120px] grid grid-cols-4 grid-rows-2 gap-1 md:grid">
          {projects.map((project, index) => (
            <figure
              key={index}
              className="project__figure"
              style={{
                gridColumn: `span ${project.column}`,
                gridRow: `span ${project.row}`,
              }}
            >
              <a href={`#${project.title}`}>
                <img className="project__img" src={project.img} alt="" />
              </a>
            </figure>
          ))}
        </div>
        <div className="w-full max-w-[1500px] mx-auto mt-8 mb-8 md:mb-[120px] grid grid-cols-2 grid-rows-3 gap-1 md:hidden">
          {projects.map((project, index) => (
            <figure
              key={index}
              className="project__figure"
            >
              <a href={`#${project.title}`}>
                <img className="project__img" src={project.longImg} alt="" />
              </a>
            </figure>
          ))}
        </div>
        <div className="flex flex-col mb-6 md:mb-[120px] mx-auto w-full">
          {projects.map((project, index) => (
            <div className="mx-auto" id={project.title} key={index}>
              <div className="title__underline max-w-[1200px] "></div>
              <div className="p-12">
                <img className="w-[180px] md:w-[200px] proj__logo" src={project.logo} alt="" />
                <p className="mt-4 mb-4 max-w-[1000px] text-[16px] md:text-[20px]">
                  {project.desc}
                </p>
                <h3 className="text-[16px] md:text-[20px] font-bold">Tech:</h3>
                <p className="text-[16px] md:text-[20px]">{project.tech}</p>
                <div className="flex flex-col mt-4 mb-4">
                  <p className="text-[16px] md:text-[20px] font-bold">Links:</p>
                  <div className="flex  gap-4">
                    <a href={project.link}>
                      <FaLink className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                    <a href={project.git}>
                      <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <a
            href="#"
            className="text-[24px] mx-auto hover:scale-105 transform transition duration-300 cursor-pointer"
          >
                <p className="font-bold flex justify-center my-auto text-[40px] red">
                  <FaRegArrowAltCircleUp />
                </p>
                <p className="font-bold text-[20px]">Back to top</p>
              
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
