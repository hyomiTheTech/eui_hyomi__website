import React from "react";

const Project = ({
  imgSrc,
  projectName,
  techStack,
  modalProperties,
  setProjectModalProperties,
  setIsModalOpen,
}) => {
  const exploreClickHandler = () => {
    setIsModalOpen(true);
    setProjectModalProperties(modalProperties);
  };
  return (
    <figure className="project">
      <img className="project__cover-image" alt="project cover" src={imgSrc} />
      <figcaption className="project__caption">
        <div className="project__description">
          <h3 className="project__name">&nbsp;{projectName}</h3>
          <h5 className="project__tech">{techStack}</h5>
        </div>
        <a className="project__button" onClick={exploreClickHandler}>
          EXPLORE
        </a>
      </figcaption>
    </figure>
  );
};

export default Project;
