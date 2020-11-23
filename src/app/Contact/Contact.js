import React from "react";
import LogoContainer from "../IntroPage/LogoContainer";

const Contact = () => {
  const contactButtonHandler = () => {
    const contactForm = document.querySelector(".contact-modal");

    contactForm.style.bottom = "-50%";
    contactForm.style.zIndex = 2;

    const wrapper = document.getElementById("page-wrapper");
    wrapper.classList.add("blur");

    const navIcon = document.getElementsByClassName("navigation__icon")[0];
    navIcon.style.display = "none";
    const navButton = document.getElementsByClassName("navigation__button")[0];
    navButton.style.zIndex = -1;
  };

  return (
    <section className="contact" id="contact">
      <a href="#" className="up-arrow">
        <img
          className="up-arrow__icon"
          src="./assets/images/logos/up-chevron.svg"
          alt="up arrow"
        />
      </a>
      <h1 className="comment">Every application has been made with love.</h1>
      <a className="contact__button" onClick={contactButtonHandler}>
        CONTACT ME
      </a>
      <LogoContainer />
      <p className="copyright">
        Copyright © 2020{" "}
        <a className="copyright__name" href="localhost:3000">
          David Kim
        </a>
      </p>
    </section>
  );
};

export default Contact;
