import React from "react";
import Project from "./Project";

const projects = [
  {
    projectName: "TWIDDLER",
    imgSrc: "./assets/images/project-image/twiddler/twiddler.png",
    shortDescription: "Web Application",
    modalProperties: {
      name: "TWIDDLER",
      images: [
        "./assets/images/project-image/twiddler/image 2.png",
        "./assets/images/project-image/twiddler/twiddler.png",
        "./assets/images/project-image/twiddler/image 2.png",
        "./assets/images/project-image/twiddler/twiddler.png",
      ],
      techStack: "jQuery, HTML, CSS",
      description: `Twiddler is one of the first apps I made since I started coding. The app mimics a Twitter feed and generates random messages from time to time. This app is probably the simplest program I will ever code but the sense of achievement and satisfaction it gave me was the greatest.`,
      site: "https://hyomi-twiddler.herokuapp.com/",
      githubSrc: "https://github.com/hyomiTheTech/twiddler",
    },
  },
  {
    projectName: "IKEA PAGE",
    imgSrc: "./assets/images/project-image/ikea-page/ikea page cover.png",
    shortDescription: "Full Stack Web Application",
    modalProperties: {
      name: "IKEA PAGE",
      images: ["https://media.giphy.com/media/rjr3gIIPiX4f4wYCLz/giphy.gif"],
      techStack: "React, Webpack, CSS, MongoDB, Express, Nodejs",
      description: `Created a clone of IKEA page in a small team under agile environment. 
      Buildt front-end modules with vanilla Javascript, CSS and React.js. Created unique product data points and stored them into MongoDB and served them with Express server to populate various product details on to the page.
      And finally created proxy to host components of other team members into one page. `,
      site: null,
      githubSrc: "https://github.com/objectobject-hr/David-service",
    },
  },
  {
    projectName: "SYSTEM DESIGN",
    imgSrc: "./assets/images/project-image/system-design/system-design.png",
    shortDescription: "Full Stack Web Application",
    modalProperties: {
      name: "SYSTEM DESIGN",
      images: [
        "./assets/images/project-image/system-design/image 2.png",
        "./assets/images/project-image/system-design/image 1.png",
        "./assets/images/project-image/system-design/image 2.png",
        "./assets/images/project-image/system-design/image 1.png",
      ],
      techStack: "Node.js, MongoDB, Nginx, loader.io",
      description: `Rebuilt, designed and optimized an existing back-end structure of HomeAway.com clone repo.
      Seeded 30 million unique data points to one SQL(PostgreSQL) and one noSQL(MongoDB) database and stress tested them both to pick a more efficient and robust database. 
      Created AWS EC2 instances and used NGINX Load Balancer to horizontally scale the system. 
      Achieved over 4,000 RPS with average latency less than 200ms at a 0% error rate.`,
      site: null,
      githubSrc: "https://github.com/objectobject-hr/sdc-service-david",
    },
  },
  {
    projectName: "LUCKY PARKING",
    imgSrc: "./assets/images/project-image/lucky-parking/lucky-parking.png",
    shortDescription: "Full Stack Map Application",
    modalProperties: {
      name: "LUCKY PARKING",
      images: ["./assets/images/project-image/lucky-parking/image 1.png"],
      techStack: "React, HTML, CSS",
      description:
        "Lucky Parking seeks to educate and inform city planners about the effects of the City of Los Angeles’ parking policies by mapping the 10.5 million parking citations on a webapp that is easy to navigate and provides meaningful analysis to the public.",
      site: "http://d2d1u2ou05os3m.cloudfront.net/",
      githubSrc: "https://github.com/hackforla/lucky-parking",
    },
  },
  {
    projectName: "HYOMI-NATOURS",
    imgSrc: "./assets/images/project-image/hyomi-natours/natours.png",
    shortDescription: "Web Application",
    modalProperties: {
      name: "HYOMI-NATOURS",
      images: ["https://media.giphy.com/media/2w97JQNazMcUoqiXLJ/giphy.gif"],
      techStack: "React, SASS",
      description:
        "Refactored HTML project I built in an advanced CSS course into React application. Utilized various SASS mixins, variables and nesting to write more reusable and legible CSS codes.",
      site: "https://hyomithetech.github.io/hyomi-natours/",
      githubSrc: "https://github.com/hyomiTheTech/hyomi-natours",
    },
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading__secondary">PORTFORLIO</h2>
      <div className="project-container">
        {projects.map(
          ({ projectName, imgSrc, shortDescription, modalProperties }) => (
            <Project
              projectName={projectName}
              imgSrc={imgSrc}
              shortDescription={shortDescription}
              modalProperties={modalProperties}
              key={projectName}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
