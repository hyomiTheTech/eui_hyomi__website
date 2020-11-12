import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { projectProperties: state.projectProperties };
};

const ConnectedProjectModal = ({ projectProperties }) => {
  const { name, images, description } = projectProperties;

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

const ProjectModal = connect(mapStateToProps, null)(ConnectedProjectModal);

export default ProjectModal;
