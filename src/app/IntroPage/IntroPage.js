import React from "react";
import "./IntroPage.scss";

function Heading() {
  return (
    <div className="wrapper">
      <div className="heading__primary">
        <span className="heading__primary-main">David Kim</span>
        <span className="heading__primary-sub">Interactives resume</span>
      </div>
      {/* <a href="https://www.linkedin.com/in/euihyun-david-kim/">
        <img src="./Linkedin_1.svg" alt="LinkedIn logo" />
      </a> */}
    </div>
  );
}

export default Heading;
