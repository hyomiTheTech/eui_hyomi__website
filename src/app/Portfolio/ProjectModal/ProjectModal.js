import React from "react";

const ProjectModal = ({ projectModalProperties }) => {
  const { name, images, description } = projectModalProperties;

  const closeButtonHandler = () => {
    let modal = document.getElementsByClassName("project-modal");
    modal[0].style.top = "-30%";

    const wrapper = document.getElementById("page-wrapper");
    wrapper.classList.remove("blur");
  };

  return (
    <section className="project-modal">
      <label className="close-button" onClick={closeButtonHandler}>
        <img
          className="close-button__icon"
          src="./assets/images/logos/delete.svg"
          alt="close-button"
        />
      </label>
      <header className="project-modal__header">{name}</header>
      <p>{description}</p>
    </section>
  );
};

export default ProjectModal;
