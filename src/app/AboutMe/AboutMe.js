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
        Hey there, I'm David Kim, a passionate software engineer dedicated to
        creating innovative applications that positively impact our daily lives.
        With extensive experience building full-stack web and mobile
        applications using modern JavaScript-based libraries and frameworks, I
        bring creativity, expertise, and enthusiasm to every project I
        undertake. As a tech enthusiast, I continually explore emerging
        technologies that shape our world for the better. There's nothing I
        enjoy more than being part of the exciting journey of technological
        advancement and contributing to meaningful innovations.
      </p>
    </section>
  );
};

export default AboutMe;
