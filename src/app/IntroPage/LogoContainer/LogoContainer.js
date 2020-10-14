import React from "react";

const LogoContainer = () => {
  return (
    <div className="logo-container">
      <a href="https://github.com/hyomiTheTech">
        <img
          className="logo"
          src="./assets/images/logos/github.svg"
          alt="github logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/euihyun-david-kim/">
        <img
          className="logo"
          src="./assets/images/logos/linkedin.svg"
          alt="linkedin logo"
        />
      </a>
      <a href="mailto:hyomithetech@gmail.com">
        <img
          className="logo"
          src="./assets/images/logos/email.svg"
          alt="email logo"
        />
      </a>
    </div>
  );
};

export default LogoContainer;
