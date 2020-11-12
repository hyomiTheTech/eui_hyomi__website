import React, { useState } from "react";
import Project from "./Project";

const projects = [
  {
    projectName: "TWIDDLER",
    imgSrc: "./assets/images/project-image/twiddler.png",
    techStack: ["jquery", "HTML", "CSS"],
    modalProperties: {
      name: "TWIDDLER",
      images: ["./assets/images/project-image/twiddler.png"],
      description: "David is the best Software Engineer in the world!!!",
    },
  },
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
