import React from "react";

import LogoContainer from "./LogoContainer";

function Heading() {
  return (
    <div className="wrapper">
      <LogoContainer />
      <div className="heading__primary">
        <span className="heading__primary-main">David Kim</span>
        <span className="heading__primary-sub">Interactives resume</span>
      </div>
      <div className="scroll-button">&nbsp;START</div>
      <a href="#" className="down-arrow">
        <img src="./assets/images/logos/down-chevron.svg" alt="down arrow" />
      </a>
    </div>
  );
}

export default Heading;
