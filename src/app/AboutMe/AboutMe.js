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
        Hello, my name is David Kim, and I am a passionate software engineer
        dedicated to creating innovative applications that enrich our daily
        lives. With experience building full-stack web and mobile applications
        using a variety of Javascript-based libraries and frameworks, I bring a
        wealth of knowledge and creativity to every project. As a tech
        enthusiast, I remain at the forefront of emerging technologies that are
        changing the world for the better. Nothing brings me greater joy than
        exploring how the world is evolving through technological advancements
        and being a part of this exciting journey.
      </p>
    </section>
  );
};

export default AboutMe;
