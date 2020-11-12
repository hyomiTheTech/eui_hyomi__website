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
  techStack,
  modalProperties,
  getProjectProperties,
  projectProperties,
}) => {
  const exploreClickHandler = () => {
    let modal = document.getElementsByClassName("project-modal");
    modal[0].style.top = "50%";
    modal[0].style.zIndex = 2;

    getProjectProperties(modalProperties);

    const wrapper = document.getElementById("page-wrapper");
    wrapper.classList.add("blur");
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

const Project = connect(null, mapDispatchToProps)(ConnectedProject);

export default Project;
