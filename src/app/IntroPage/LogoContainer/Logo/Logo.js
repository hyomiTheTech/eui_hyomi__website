import React from "react";

const Logo = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img className="logo" src={src} alt={alt} />
    </a>
  );
};

export default Logo;
