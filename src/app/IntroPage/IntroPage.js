import React from "react";

import LogoContainer from "./LogoContainer";

function Heading() {
  return (
    <header className="landing-page" id="home">
      <div className="heading__primary">
        <span className="heading__primary-main">&nbsp;David Kim</span>
        <span className="heading__primary-sub">SOFTWARE ENGINEER</span>
      </div>
      <div className="start-button">
        <a href="#about" className="start-button__label">
          &nbsp;START
        </a>

        <img
          className="start-button__icon"
          src="./assets/images/logos/down-chevron.svg"
          alt="down arrow"
        />
      </div>
    </header>
  );
}

export default Heading;
