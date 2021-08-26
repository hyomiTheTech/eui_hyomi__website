/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoContainer from "../IntroPage/LogoContainer";
import { Link } from "react-scroll";

const Contact = () => {
  const contactButtonHandler = () => {
    const contactForm = document.querySelector(".contact-modal");

    contactForm.style.top = "50%";
    contactForm.style.zIndex = 3;

    const wrapper = document.getElementById("page-wrapper");
    wrapper.classList.add("blur");

    const navIcon = document.getElementsByClassName("navigation__icon")[0];
    navIcon.style.display = "none";
    const navButton = document.getElementsByClassName("navigation__button")[0];
    navButton.style.zIndex = -1;

    const overlay = document.querySelector("#modal-overlay");
    overlay.style.zIndex = 2;

    // setTimeout(() => {
    //   document.body.style.overflowY = "hidden";
    // }, 500);
  };

  return (
    <footer className="contact" id="contact">
      <Link
        className="up-arrow"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img
          className="up-arrow__icon"
          src="./assets/images/logos/up-chevron.svg"
          alt="up arrow"
        />
      </Link>

      <h2
        className="contact-heading__secondary"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1200"
        data-aos-once
      >
        Have a question or want to work together? <br /> Let's keep in touch
      </h2>
      <a
        className="contact__button"
        onClick={contactButtonHandler}
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-duration="1200"
        data-aos-once
      >
        CONTACT ME
      </a>
      <LogoContainer />
      <p className="copyright">
        Copyright © 2020{" "}
        <a className="copyright__name" href="localhost:3000">
          David Kim
        </a>
      </p>
    </footer>
  );
};

export default Contact;
