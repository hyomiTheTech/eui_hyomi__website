import React from "react";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h1
        className="heading__secondary"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-once
      >
        ABOUT ME
      </h1>

      <img
        className="about__profile"
        src="./assets/images/picture/profile.c.jpeg"
        alt="profile"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-once
      />

      <p
        className="about__intro"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once
      >
        Hi there, my name is David Kim, and I am a software engineer with a
        passion for building creative software that enriches our lives. I have
        done work in building full-stack web and mobile applications utilizing
        javascript based libraries and frameworks. I am also a tech enthusiast,
        and am interested in all innovative technologies that improve the world
        but mainly programming and blockchain. The greatest joy of my life is
        exploring how the world is becoming a better place to live through
        technological advancement, and I am so excited to be a part of it.
      </p>
    </section>
  );
};

export default AboutMe;
