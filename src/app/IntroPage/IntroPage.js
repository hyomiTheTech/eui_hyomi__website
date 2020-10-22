import React from "react";

import LogoContainer from "./LogoContainer";

function Heading() {
  return (
    <header className="landing-page" id="home">
      {/* <LogoContainer /> */}
      <div className="heading__primary">
        <span className="heading__primary-main">&nbsp;David Kim</span>
        <span className="heading__primary-sub">SOFTWARE ENGINEER</span>
      </div>
      <div className="scroll-button">
        <a href="#about">&nbsp;START</a>
      </div>
      <img src="./assets/images/logos/down-chevron.svg" alt="down arrow" />
    </header>
  );
}

export default Heading;
