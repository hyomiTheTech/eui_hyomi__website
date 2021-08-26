const projects = [
  {
    projectName: "TWIDDLER",
    imgSrc: "./assets/images/project-image/twiddler/twiddler.png",
    shortDescription: "Web Application",
    modalProperties: {
      name: "TWIDDLER",
      images: [
        "./assets/images/project-image/twiddler/image 2.png",
        // "./assets/images/project-image/twiddler/twiddler.png",
        // "./assets/images/project-image/twiddler/image 2.png",
        // "./assets/images/project-image/twiddler/twiddler.png",
      ],
      techStack: "jQuery, HTML, CSS, Heroku",
      description: `Twiddler is one of the first apps I made since I started coding. The app mimics a Twitter feed and generates random messages from time to time. This app is probably the simplest program I will ever code but the sense of achievement and satisfaction it gave me was the greatest.`,
      site: "https://hyomi-twiddler.herokuapp.com/",
      githubSrc: "https://github.com/hyomiTheTech/twiddler",
    },
  },
  {
    projectName: "IKEA CLONE",
    imgSrc: "./assets/images/project-image/ikea-page/ikea page cover.png",
    shortDescription: "Full Stack Web Application",
    modalProperties: {
      name: "IKEA CLONE",
      images: ["https://media.giphy.com/media/rjr3gIIPiX4f4wYCLz/giphy.gif"],
      techStack: "React, Webpack, MongoDB, Express.js, Node.js",
      description: `Created a clone of IKEA page in a small team under agile environment. 
        Built front-end modules with vanilla Javascript, CSS and React. Created unique product data points and stored them into MongoDB and served them with Express server to populate various product details on to the page.
        And lastly created proxy to host components of other team members into one page. `,
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
        // "./assets/images/project-image/system-design/image 2.png",
        "./assets/images/project-image/system-design/image 1.png",
        // "./assets/images/project-image/system-design/image 2.png",
        // "./assets/images/project-image/system-design/image 1.png",
      ],
      techStack: "Node.js, PostgreSQL, MongoDB, Nginx, Loader.io, AWS",
      description: `Rebuilt, designed and optimized an existing back-end structure of HomeAway.com clone repo.
        Seeded 30 million unique data points to one SQL(PostgreSQL) and one noSQL(MongoDB) database and optimized queries and both databases to render faster query speed.
        Created AWS EC2 instances and used NGINX Load Balancer to horizontally scale the system. Stress tested both systems to pick a more efficient and reliable system. 
        Achieved over 4,000 RPS with average latency less than 200ms at a 0% error rate.`,
      site: null,
      githubSrc: "https://github.com/objectobject-hr/sdc-service-david",
    },
  },
  {
    projectName: "TOURVIEWAR",
    imgSrc: "./assets/images/project-image/tourviewar/tourviewar.png",
    shortDescription: "Full Stack Mobile Application",
    modalProperties: {
      name: "TOURVIEWAR",
      images: [
        "./assets/images/project-image/tourviewar/image 2.png",
        // "./assets/images/project-image/tourviewar/tourviewar.png",
        // "./assets/images/project-image/tourviewar/image 1.png",
        // "./assets/images/project-image/tourviewar/image 2.png",
        // "./assets/images/project-image/tourviewar/tourviewar.png",
      ],
      techStack: "React-Native, ViroReact, Express.js, PostgreSQL, AWS",
      description: `Worked in a small team and created a mobile application that lets users to create and experience 360 degree augmented reality spaces. The users are allowed to create account, take or upload a picture, create text/object in the AR spaces, as well as visit AR spaces created by others.`,
      site: null,
      githubSrc: "https://github.com/TourViewAR/tourViewARClient",
    },
  },

  {
    projectName: "HYOMI-NATOURS",
    imgSrc: "./assets/images/project-image/hyomi-natours/natours.png",
    shortDescription: "Web Application",
    modalProperties: {
      name: "HYOMI-NATOURS",
      images: ["https://media.giphy.com/media/2w97JQNazMcUoqiXLJ/giphy.gif"],
      techStack: "React, SASS, GitHub Pages",
      description:
        "Refactored HTML project I built in an advanced CSS course into React application. Utilized various SASS mixins, variables and nesting to write more reusable and legible CSS codes.",
      site: "https://hyomithetech.github.io/hyomi-natours/",
      githubSrc: "https://github.com/hyomiTheTech/hyomi-natours",
    },
  },
  {
    projectName: "LUCKY PARKING",
    imgSrc: "./assets/images/project-image/lucky-parking/lucky-parking.png",
    shortDescription: "Full Stack Map Application",
    modalProperties: {
      name: "LUCKY PARKING",
      images: ["./assets/images/project-image/lucky-parking/image 1.png"],
      techStack: "React, Redux, Mapbox GL JS",
      description:
        "Lucky Parking seeks to educate and inform city planners about the effects of the City of Los Angeles’ parking policies by mapping the 10.5 million parking citations on a webapp that is easy to navigate and provides meaningful analysis to the public. Led a small team to create a web map application utilizing React and Mapbox GL JS. The user are allowed to search a location in city of Los Angeles by address and view parking citation data.",
      site: "http://d2d1u2ou05os3m.cloudfront.net/",
      githubSrc: "https://github.com/hackforla/lucky-parking",
    },
  },
  {
    projectName: "CRYPTO PRICE ALARM",
    imgSrc:
      "./assets/images/project-image/crypto-price-alarm/crypto-price-alarm.png",
    shortDescription: "Mobile Application",
    modalProperties: {
      name: "CRYPTO PRICE ALARM",
      images: [
        "./assets/images/project-image/crypto-price-alarm/crypto-price-alarm.png",
      ],
      techStack: "React Native, Deep Link, Async Storage",
      description:
        "Crypto Price Alarm is a simple mobile app that triggers alarm when a crypto price reach a set up price level. Stored alarm data persistently in the app utilizing AsyncStorage. Created background fetch tasks to periodically fetch price API in the background of the app. Utilized deep linking technique and navigation module to open the app when alarm triggered.",
      site: null,
      githubSrc: "https://github.com/hyomiTheTech/crypto_alarm",
    },
  },
];

export default projects;
