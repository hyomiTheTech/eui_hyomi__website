import React, { useState } from "react";

const Navigation = () => {
  const [checked, isChecked] = useState(false);

  const CheckboxHandler = () => {
    isChecked(!checked);
    const wrapper = document.getElementById("page-wrapper");

    if (!checked) {
      wrapper.classList.add("blur");
      //   setTimeout(() => {
      //     document.body.style.overflow = "hidden";
      //     document.body.style.paddingRight = "15px";
      //   }, 150);
    } else {
      wrapper.classList.remove("blur");
      //   setTimeout(() => {
      //     document.body.style.paddingRight = "0";
      //     document.body.style.overflow = "auto";
      //   }, 180);
    }
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label
        htmlFor="navi-toggle"
        className="navigation__button"
        onClick={CheckboxHandler}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <nav className="navigation__nav">
        <label htmlFor="navi-toggle">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#home"
                className="navigation__link"
                onClick={CheckboxHandler}
              >
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
                CONTACT ME
              </a>
            </li>
          </ul>
        </label>
      </nav>
    </div>
  );
};

export default Navigation;
