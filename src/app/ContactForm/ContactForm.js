import React from "react";

const ContactForm = () => {
  const closeButtonHandler = () => {
    let contactForm = document.querySelector(".contact-modal");
    contactForm.style.bottom = "-100%";

    const wrapper = document.querySelector("#page-wrapper");
    wrapper.classList.remove("blur");

    document.querySelector(".navigation__icon").style.display = "block";
  };

  return (
    <div className="contact-modal">
      <label className="close-button" onClick={closeButtonHandler}>
        <img
          className="close-button__icon"
          src="./assets/images/logos/delete.svg"
          alt="close-button"
        />
      </label>
      <h1 className="contact-modal__heading">CONTACT</h1>
      <form className="contact-form" action="contactform.php" method="post">
        <input
          className="contact-form__input"
          type="text"
          name="name"
          placeholder="Full name"
        />
        <input
          className="contact-form__input"
          type="text"
          name="mail"
          placeholder="Your e-mail"
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
        ></textarea>
        <button
          className="contact-form__submit-button"
          type="submit"
          name="submit"
        >
          SEND MAIL
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
