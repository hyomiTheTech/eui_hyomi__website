import React from "react";

const Project = ({ imgSrc, projectName }) => {
  return (
    <figure className="project">
      <img className="project__cover-image" alt="project cover" src={imgSrc} />
      <figcaption className="project__caption">
        {projectName}
        <div>sdfsd</div>
      </figcaption>
    </figure>
  );
};

export default Project;
