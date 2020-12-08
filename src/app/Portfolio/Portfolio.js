import React from "react";
import Project from "./Project";
import projects from "../../data/projects";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading__secondary">PORTFORLIO</h2>
      <div className="project-container">
        {projects.map(
          ({ projectName, imgSrc, shortDescription, modalProperties }) => (
            <Project
              projectName={projectName}
              imgSrc={imgSrc}
              shortDescription={shortDescription}
              modalProperties={modalProperties}
              key={projectName}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
