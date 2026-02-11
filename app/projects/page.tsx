"use client";

import { useState } from "react";
import Footer from "../Components/Footer";
import Project from "../Components/Project";

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      img: "/skinstric.png",
      title: "Skinstric",
      desc: "Cutting edge A.I. application that creates a highly-personalized routine tailored to what your skin needs via a visual scan of your face.",
      link: "https://skinstric-nine-sand.vercel.app/",
      tech: "NextJS, CSS, Figma",
      git: "https://github.com/Nickspero/Skinstric",
      column: 1,
      row: 2,
    },
    {
      img: "/nft.png",
      title: "Ultraverse NFT",
      desc: "Ultraverse NFT Market is a platform created to showcase and sell NFTs from various artists. Users can explore diverse NFT collections, view creator profiles, and check out top sellers.",
      link: "https://nick-pappas-internship.vercel.app/",
      tech: "React, CSS",
      git: "https://github.com/Nickspero/NickPappas-Internship",
      column: 1,
      row: 1,
    },
    {
      img: "/omdb.png",
      title: "OMDb",
      desc: "This sleek movie database updates daily with fresh film information. Easily search thousands of titles and dive into rich details—reviews, ratings, plot summaries, cast lists, and more—all in one place.",
      link: "https://omdb-flame.vercel.app/",
      tech: "React, CSS",
      git: "https://github.com/Nickspero/OMDb-React",
      column: 2,
      row: 1,
    },
    {
      img: "/summarist.png",
      title: "Summarist",
      desc: "Book summary service with fully functioning Firebase Authentication and Stripe Payment Integration. Get quick summaries of some of the most popular book titles of the last decade!",
      link: "https://summarist-cyan.vercel.app/",
      tech: "NextJS, CSS",
      git: "https://github.com/Nickspero/summarist",
      column: 1,
      row: 1,
    },
    {
      img: "/treact.png",
      title: "Treact",
      desc: "Treact offers beautiful, modular React templates that are easy to set up, customize, and deploy — complete with features like pricing plans (Personal, Business, Enterprise), trustworthy service highlights, and a simple register-download-run workflow.",
      link: "https://nickspero.github.io/Treact-Project/",
      tech: "HTML, CSS, VanillaJS",
      git: "https://github.com/Nickspero/Treact-Project",
      column: 1,
      row: 1,
    },
    {
      img: "/library.png",
      title: "Library",
      desc: "A mock e-commerce-style “Library” site offering an online platform to buy books. Featuring over 10,000 titles in various categories, with featured bestsellers and latest releases.",
      link: "https://library-react-seven-steel.vercel.app/",
      tech: "React, CSS",
      git: "https://github.com/Nickspero/Library-React",
      column: 1,
      row: 1,
    },
  ];

  return (
    <div className="h-full">
      <div className="p-4">
        <div className="mx-auto w-max flex flex-col justify-center items-center">
          <h1 className="font-bold text-[60px] text-[#c64623]">My Projects</h1>
          <p className="text-[24px] text-[#c64623]">
            Code, Design, and everything in between.
          </p>
          <div className="bg-[#c64623] w-full h-[1px] mt-3"></div>
        </div>
        <div className="w-full max-w-[1500px] mx-auto mt-8 mb-[120px] grid grid-cols-4 grid-rows-2 gap-1">
          {projects.map((project, index) => (
            <figure
              key={index}
              className={`project__figure col-span-${project.column} row-span-${project.row}`}>
              <img className="project__img" src={project.img} alt="" />
            </figure>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
