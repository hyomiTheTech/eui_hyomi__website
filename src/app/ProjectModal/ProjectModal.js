import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import Carousel from "./Carousel";

const mapStateToProps = (state) => {
  return { projectProperties: state.projectProperties };
};

const ConnectedProjectModal = ({ projectProperties }) => {
  const {
    name,
    images,
    techStack,
    description,
    site,
    githubSrc,
  } = projectProperties;

  const closeButtonHandler = () => {
    let modal = document.getElementsByClassName("project-modal");
    modal[0].style.top = "-100%";

    const wrapper = document.getElementById("page-wrapper");
    wrapper.classList.remove("blur");

    document.getElementsByClassName("navigation__icon")[0].style.display =
      "block";

    const navButton = document.getElementsByClassName("navigation__button")[0];
    navButton.style.zIndex = 3;

    const overlay = document.querySelector("#modal-overlay");
    overlay.style.zIndex = -1;

    setTimeout(() => {
      document.body.style.overflowY = "visible";
    }, 300);
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
      <Scrollbars autoHide>
        <main className="project-modal__content">
          {images.length > 1 ? (
            <Carousel images={images} />
          ) : (
            <img
              className="project-modal__cover"
              src={images[0]}
              alt="project-cover"
            />
          )}
          <p className="project-modal__tech-stack">{techStack}</p>
          <p className="project-modal__description">{description}</p>
        </main>
      </Scrollbars>
      <div className="anchor-tag-container">
        {site === null ? null : (
          <a
            className="anchor-tag"
            target="_blank"
            rel="noopener noreferrer"
            href={site}
          >
            Visit
          </a>
        )}
        <a
          className="anchor-tag"
          target="_blank"
          rel="noopener noreferrer"
          href={githubSrc}
        >
          Github
        </a>
      </div>
    </section>
  );
};

const ProjectModal = connect(mapStateToProps, null)(ConnectedProjectModal);

export default ProjectModal;
