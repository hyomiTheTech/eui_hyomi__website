import React from "react";
import Project from "./Project";
import projects from "../../data/projects";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2
        className="heading__secondary"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-once
      >
        PORTFOLIO
      </h2>
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
