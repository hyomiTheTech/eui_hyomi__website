/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [checked, isChecked] = useState(false);

  const CheckboxHandler = () => {
    isChecked(!checked);
    const wrapper = document.getElementById("page-wrapper");

    if (!checked) {
      wrapper.classList.add("blur");
    } else {
      wrapper.classList.remove("blur");
    }

    let checkbox = document.querySelector(".navigation__checkbox");

    if (checkbox.checked) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" />

      <label className="navigation__button" onClick={CheckboxHandler}>
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              // activeClass="active"
              className="navigation__link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              delay={600}
              onClick={CheckboxHandler}
            >
              HOME
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              delay={600}
              onClick={CheckboxHandler}
            >
              ABOUT
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              delay={600}
              onClick={CheckboxHandler}
            >
              PORTFOLIO
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              delay={600}
              onClick={CheckboxHandler}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
