import React from "react";

const Project = ({ imgSrc, projectName }) => {
  return (
    <figure className="project">
      <img className="project__cover-image" alt="project cover" src={imgSrc} />
      <figcaption className="project__caption">
        <div className="project__description">
          <h3 className="project__name">&nbsp;{projectName}</h3>
          <h5 className="project__tech">HTML, jQuery, CSS</h5>
        </div>
        <button className="project__button">EXPLORE</button>
      </figcaption>
    </figure>
  );
};

export default Project;
