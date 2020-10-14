import React from "react";

import LogoContainer from "./LogoContainer";

function Heading() {
  return (
    <div className="wrapper">
      <div className="heading__primary">
        <span className="heading__primary-main">David Kim</span>
        <span className="heading__primary-sub">Interactives resume</span>
      </div>
      <LogoContainer />
    </div>
  );
}

export default Heading;
