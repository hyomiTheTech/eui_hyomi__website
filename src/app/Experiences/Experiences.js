import React from "react";
import Experience from "./Experience/Experience";

const EXPERIENCE_DATA = [
  {
    employer: "LV L33t Coders",
    date: "Jul. 2021 - Current",
    position: "Organizer/Founder",
    description:
      "LV L33t Coders is a tech meetup group I organized to create vibrant tech community in Las Vegas and collaborate to create exciting applications. Currently, we have over 30 members, and we are continuing our discussions on creating applications utilizing latest technologies for the people and non-profit organizations in Las Vegas.",
  },
  {
    employer: "Atomic.dev",
    date: "Apr. 2020 - Oct. 2020",
    position: "Remote Frontend developer Intern",
    description:
      "Atomic.dev is a startup creating a low-code SaaS platform. I worked as a remote Front-End developer and developed a multi-page web low-code development platform using React, HTML, and CSS. I also took the lead on reorganizing existing React states by implementing Redux. One of the primary tasks I was assigned to was converting legacy jQuery code into Vanilla Javascript code and integrated it into the main React platform.",
  },
  {
    employer: "Hack for LA",
    date: "Mar 2020 - July 2020",
    position: "Lead Full-Stack Developer",
    description:
      "Hack for LA is a project of Code for America and is its official Los Angeles chapter. I contributed to an open-source project, Lucky Parking, as a Lead Front-end Developer. I led a group of software engineers and collaborated with data scientists to create an interactive map platform that dynamically renders various processed information about parking spaces for the city of Los Angeles.",
  },
  {
    employer: "T3 Trading LLC.",
    date: "Aug 2018 – May 2019",
    position: "Equity Trader",
    description:
      "After a decent success in cryptocurrency trading, I went to Wall Street to challenge myself to professional equity trading. I was introduced to various complex trading techniques and strategies. My primary duties include, but are not limited to, forecasting target price of equities by building financial modeling, monitoring order books and options activities, and assessing macroeconomic and market conditions by monitoring economic indicators and analyst reports. ",
  },
  {
    employer: "Cryptocurrency Exchange",
    date: "Mar 2017 – Apr 2018",
    position: "Cryptocurrency Analyst/Trader",
    description:
      "One of the most important events in my life. I analyzed and traded cryptocurrencies with an initial investment of $25k, which I borrowed from mom. After studying and constant monitoring 20 different cryptocurrencies and performing technical analysis, I achieved over 2,000% return and cashed out $600k a year later. Not only did this event reward me financially, but also rewarded me with powerful motivation to change my career in tech. ",
  },
];

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
        {EXPERIENCE_DATA.map(({ employer, date, position, description }) => (
          <Experience
            employer={employer}
            date={date}
            position={position}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
