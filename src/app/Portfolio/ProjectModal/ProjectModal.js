import React from "react";

const ProjectModal = ({
  isModalOpen,
  setIsModalOpen,
  projectModalProperties,
}) => {
  const { name, images, description } = projectModalProperties;

  const toggleModalClassName = isModalOpen
    ? "project-modal--open"
    : "project-modal--close";
  return (
    <section className={toggleModalClassName}>
      <label
        className="close-button"
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        <span className="close-button__icon">&nbsp;</span>
      </label>
      <header className="project-modal__header">{name}</header>
      <p>{description}</p>
    </section>
  );
};

export default ProjectModal;
