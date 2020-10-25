import React from "react";

import Project from "./Project";

const projects = [
  {
    projectName: "David's Twiddler",
    imgSrc: "./assets/images/project-image/twiddler.png",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading__secondary">PORTFORLIO</h2>
      welcome to my portforlio
      <div className="project-container">
        {projects.map(({ projectName, imgSrc }) => (
          <Project
            projectName={projectName}
            imgSrc={imgSrc}
            key={projectName}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
