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
        Hey there, I'm David Kim, a software engineer with a passion for
        building data-driven applications that solve real-world problems. My
        journey began in quantitative finance, where I discovered my love for
        working with data and statistical analysis. As a software engineer, I've
        channeled that passion into creating impactful tools—from AI-powered
        chatbots using RAG technology to automation systems that process and
        analyze complex datasets. I'm drawn to projects that combine analytical
        thinking with technical execution, whether it's optimizing application
        performance or building systems that extract meaningful insights from
        data. Currently preparing to pursue graduate studies in data science to
        deepen my computational and analytical capabilities, I'm excited about
        the journey ahead and the opportunity to contribute to innovations at
        the intersection of data and technology.
      </p>
    </section>
  );
};

export default AboutMe;
