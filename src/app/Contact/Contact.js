import React from "react";
import LogoContainer from "../IntroPage/LogoContainer";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <img
        className="up-arrow"
        src="./assets/images/logos/up-chevron.svg"
        alt="up arrow"
      />
      <h1 className="comment">. . . made with love</h1>
      <LogoContainer />
      <p className="copyright">
        Copyright © 2020{" "}
        <a className="copyright__name" href="localhost:3000">
          David Kim
        </a>
      </p>
    </div>
  );
};

export default Contact;
