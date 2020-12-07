import React from "react";
import { connect } from "react-redux";
import { getProjectProperties } from "../../../redux/action";

const mapDispatchToProps = (dispatch) => {
  return {
    getProjectProperties: (properties) =>
      dispatch(getProjectProperties(properties)),
  };
};

const ConnectedProject = ({
  imgSrc,
  projectName,
  shortDescription,
  modalProperties,
  getProjectProperties,
  projectProperties,
}) => {
  const exploreClickHandler = () => {
    let modal = document.getElementsByClassName("project-modal")[0];
    modal.style.top = "50%";
    modal.style.zIndex = 2;

    getProjectProperties(modalProperties);

    const wrapper = document.getElementById("page-wrapper");
    wrapper.classList.add("blur");

    const navIcon = document.getElementsByClassName("navigation__icon")[0];
    navIcon.style.display = "none";
    const navButton = document.getElementsByClassName("navigation__button")[0];
    navButton.style.zIndex = -1;
  };
  return (
    <figure className="project">
      <img className="project__cover-image" alt="project cover" src={imgSrc} />
      <div className="project__gradient-cover" />
      <figcaption className="project__caption">
        <div className="project__description">
          <h3 className="project__name">&nbsp;{projectName}</h3>
          <h5 className="project__tech">{shortDescription}</h5>
        </div>
        <button className="project__button" onClick={exploreClickHandler}>
          EXPLORE
        </button>
      </figcaption>
    </figure>
  );
};

const Project = connect(null, mapDispatchToProps)(ConnectedProject);

export default Project;
