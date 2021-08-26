import React from "react";
import Experience from "./Experience/Experience";
import EXPERIENCE_DATA from "../../data/experience";

const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <h1
        className="heading__secondary"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-once
      >
        EXPERIENCES
      </h1>
      <div className="experience__list">
        {EXPERIENCE_DATA.map(
          ({ index, employer, date, position, description }) => (
            <Experience
              key={index}
              employer={employer}
              date={date}
              position={position}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
