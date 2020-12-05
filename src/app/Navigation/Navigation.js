import React, { useState } from "react";

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
            <a href="#" className="navigation__link" onClick={CheckboxHandler}>
              HOME
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#about"
              className="navigation__link"
              htmlFor="navi-toggle"
              onClick={CheckboxHandler}
            >
              ABOUT
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#portfolio"
              className="navigation__link"
              htmlFor="navi-toggle"
              onClick={CheckboxHandler}
            >
              PORTFOLIO
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              htmlFor="navi-toggle"
              onClick={CheckboxHandler}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
