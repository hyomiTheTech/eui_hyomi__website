import React, { useState } from "react";
import Project from "./Project";

const projects = [
  {
    projectName: "TWIDDLER",
    imgSrc: "./assets/images/project-image/twiddler/twiddler.png",
    techStack: "jQuery, HTML, CSS",
    modalProperties: {
      name: "TWIDDLER",
      images: [
        "./assets/images/project-image/twiddler/image 2.png",
        "./assets/images/project-image/twiddler/image 1.png",
        "./assets/images/project-image/twiddler/image 2.png",
        "./assets/images/project-image/twiddler/image 1.png",
      ],
      description: `Twiddler is one of the first apps I made since I started coding. The app mimics a Twitter feed and generates random messages from time to time. This app is probably the simplest program I will ever code but the sense of achievement and satisfaction it gave me was the greatest.`,
      site: "https://hyomi-twiddler.herokuapp.com/",
      githubSrc: "https://github.com/hyomiTheTech/twiddler",
    },
  },
  {
    projectName: "LUCKY PARKING",
    imgSrc: "./assets/images/project-image/lucky-parking/lucky-parking.png",
    techStack: "React, HTML, CSS",
    modalProperties: {
      name: "LUCKY PARKING",
      images: ["./assets/images/project-image/lucky-parking/image 1.png"],
      description:
        "Lucky Parking seeks to educate and inform city planners about the effects of the City of Los Angeles’ parking policies by mapping the 10.5 million parking citations on a webapp that is easy to navigate and provides meaningful analysis to the public.",
      site: "http://d2d1u2ou05os3m.cloudfront.net/",
      githubSrc: "https://github.com/hackforla/lucky-parking",
    },
  },
  // {
  //   projectName: "IKEA PAGE",
  //   imgSrc: "./assets/images/project-image/twiddler/twiddler.png",
  //   techStack: "React, HTML, CSS",
  //   modalProperties: {
  //     name: "IKEA PAGE",
  //     images: ["fsdf"],
  //     description: "David is the best Software Engineer in the world!!!",
  //   },
  // },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading__secondary">PORTFORLIO</h2>
      Welcome to my portforlio
      <div className="project-container">
        {projects.map(({ projectName, imgSrc, techStack, modalProperties }) => (
          <Project
            projectName={projectName}
            imgSrc={imgSrc}
            techStack={techStack}
            modalProperties={modalProperties}
            key={projectName}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
