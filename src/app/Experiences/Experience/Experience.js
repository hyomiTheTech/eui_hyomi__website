import React from "react";

const Experience = ({ employer, position, date, description }) => {
  return (
    <section
      className="experience"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-once
    >
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
