import React from "react";
import { Link } from "react-scroll";

function Heading() {
  return (
    <header className="landing-page" id="home">
      <div className="heading__primary">
        <span className="heading__primary-main">&nbsp;David Kim</span>
        <span className="heading__primary-sub">SOFTWARE ENGINEER</span>
      </div>
      <div className="start-button">
        <Link
          className="start-button__label"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          &nbsp;START
        </Link>

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
