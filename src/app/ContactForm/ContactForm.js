import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(null);

  const handleModalClose = () => {
    let contactForm = document.querySelector(".contact-modal");
    contactForm.style.bottom = "-250%";
    contactForm.style.top = null;

    const wrapper = document.querySelector("#page-wrapper");
    wrapper.classList.remove("blur");

    document.querySelector(".navigation__icon").style.display = "block";

    const navButton = document.getElementsByClassName("navigation__button")[0];
    navButton.style.zIndex = 3;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_06mpapf",
        "template_g78qmam",
        e.target,
        "user_PIkdZ66k8v1fagtt0eJbP"
      )
      .then(
        (result) => {
          if (result) {
            setIsSubmit(true);
            setTimeout(() => {
              handleModalClose();
            }, 2000);
          }
        },
        (error) => {
          if (error) {
            setIsSubmit(false);
          }
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div className="contact-modal">
        <label className="close-button" onClick={handleModalClose}>
          <img
            className="close-button__icon"
            src="./assets/images/logos/delete.svg"
            alt="close-button"
          />
        </label>
        <h1 className="contact-modal__heading">CONTACT</h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            className="contact-form__input"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            className="contact-form__input"
            type="email"
            name="email"
            placeholder="Your e-mail"
            required
          />
          <input
            className="contact-form__input"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="contact-form__message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <div className="submit-alert">
            {isSubmit === null ? null : isSubmit === true ? (
              <p className="submit-alert__message--success">
                Message submitted. Thanks!
              </p>
            ) : (
              <p className="submit-alert__message--fail">
                Message didn't submitted. Please try again!
              </p>
            )}
          </div>
          <button
            className="contact-form__submit-button"
            type="submit"
            name="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
