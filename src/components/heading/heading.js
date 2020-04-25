import React from "react";
import "./heading.scss";

function Heading() {
  return (
    <header className="heading">
      <div className="heading__primary">
        <span className="heading__primary-main">David Kim</span>
        <span className="heading__primary-sub">Interactive resume</span>
      </div>
    </header>
  );
}

export default Heading;
