import React from "react";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading__secondary">ABOUT ME</h1>

      <img
        className="about__profile"
        src="./assets/images/picture/profile.jpeg"
        alt="profile"
      />

      <p className="about__intro">
        Hi there, my name is David Kim, and I am a Full-Stack web and mobile
        developer with a passion for building creative software that improves
        the world through innovative technologies.
        <br />
        <br />I feel genuine excitement when solving problems and helping others
        find creative solutions. Programming has been such a wonderful source of
        excitement for these reasons, and I cannot wait for the future
        challenges and collaborations ahead!
      </p>
    </section>
  );
};

export default AboutMe;
