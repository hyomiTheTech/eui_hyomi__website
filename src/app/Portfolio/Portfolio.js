import React, { useState } from "react";
import Project from "./Project";

const projects = [
  {
    projectName: "TWIDDLER",
    imgSrc: "./assets/images/project-image/twiddler/twiddler.png",
    techStack: "jQuery, HTML, CSS",
    modalProperties: {
      name: "TWIDDLER",
      images: [
        "./assets/images/project-image/twiddler/image 6.png",
        "./assets/images/project-image/twiddler/image 1.png",
        "./assets/images/project-image/twiddler/image 2.png",
        "./assets/images/project-image/twiddler/image 3.png",
        "./assets/images/project-image/twiddler/image 4.png",
        "./assets/images/project-image/twiddler/image 5.png",
        "./assets/images/project-image/twiddler/image 6.png",
        "./assets/images/project-image/twiddler/twiddler.png",
      ],
      description: "David is the best Software Engineer in the world!!!",
      site: "https://hyomi-twiddler.herokuapp.com/",
      githubSrc: "https://github.com/hyomiTheTech/twiddler",
    },
  },
  // {
  //   projectName: "IKEA PAGE",
  //   imgSrc: "./assets/images/project-image/twiddler.png",
  //   techStack: "React, HTML, CSS",
  //   modalProperties: {
  //     name: "IKEA PAGE",
  //     images: ["fsdf"],
  //     description: "David is the best Software Engineer in the world!!!",
  //   },
  // },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading__secondary">PORTFORLIO</h2>
      Welcome to my portforlio
      <div className="project-container">
        {projects.map(({ projectName, imgSrc, techStack, modalProperties }) => (
          <Project
            projectName={projectName}
            imgSrc={imgSrc}
            techStack={techStack}
            modalProperties={modalProperties}
            key={projectName}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
