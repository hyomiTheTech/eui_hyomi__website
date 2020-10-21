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
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>HOME
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>ABOUT ME
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>PORTFOLIO
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>CONTACT ME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
