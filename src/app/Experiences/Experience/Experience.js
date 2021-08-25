import React from "react";

const Experience = ({ employer, position, date, description }) => {
  return (
    <div>
      <div>{employer}</div>
      <div>{position}</div>
      <div>{date}</div>
      <div>{description}</div>
    </div>
  );
};

export default Experience;
