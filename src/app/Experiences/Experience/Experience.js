import React from "react";

const Experience = ({ employer, position, date, description }) => {
  return (
    <section className="experience">
      <div className="experience__left-column">
        <div className="experience__employer">{employer}</div>
        <div className="experience__date">{date}</div>
      </div>
      <div className="experience__right-column">
        <div className="experience__position">{position}</div>
        <p className="experience__description">{description}</p>
      </div>
    </section>
  );
};

export default Experience;
