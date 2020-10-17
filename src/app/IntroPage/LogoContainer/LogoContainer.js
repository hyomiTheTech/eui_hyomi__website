import React from "react";

import Logo from "./Logo";

const LogoContainer = () => {
  return (
    <nav className="logo-container">
      <Logo
        href="https://github.com/hyomiTheTech"
        src="./assets/images/logos/github.svg"
        alt="github logo"
      />
      <Logo
        href="https://www.linkedin.com/in/euihyun-david-kim/"
        src="./assets/images/logos/linkedin.svg"
        alt="linkedin logo"
      />
      <Logo
        href="mailto:hyomithetech@gmail.com"
        src="./assets/images/logos/email.svg"
        alt="email logo"
      />
    </nav>
  );
};

export default LogoContainer;
