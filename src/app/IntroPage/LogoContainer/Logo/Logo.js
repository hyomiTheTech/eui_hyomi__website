import React from "react";

const Logo = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className="logo" src={src} alt={alt} />
    </a>
  );
};

export default Logo;
