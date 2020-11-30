import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState(300);
  const image = document.querySelectorAll(".carousel__image");
  const carousel = document.querySelector(".carousel__images");

  const previousButtonHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      carousel.style.transition = "all 0.7s ease-in-out";
    }
  };

  const nextButtonHandler = () => {
    if (counter < images.length - 1) {
      setCounter(counter + 1);
      carousel.style.transition = "all 0.7s ease-in-out";
    }
  };

  const transitionEndHandler = () => {
    if (carousel) {
      if (image[counter].id === "lastClone") {
        carousel.style.transition = "none";
        setCounter(image.length - 2);
      }
      if (image[counter].id === "firstClone") {
        carousel.style.transition = "none";
        setCounter(1);
      }
    }
  };

  let mediaQuery = window.matchMedia("(min-width: 768px)");
  useEffect(() => {
    if (mediaQuery.matches) {
      setSize(300);
    } else {
      setSize(250);
    }
  }, [mediaQuery.matches]);

  useEffect(() => {
    if (carousel) {
      carousel.style.transform = `translateX(${-size * counter}px)`;
    }
  }, [counter]);

  return (
    <div className="carousel">
      <button
        className="carousel__button--previous"
        onClick={previousButtonHandler}
      >
        <img
          className="button__icon"
          src="./assets/images/logos/left-arrow.svg"
        />
      </button>
      <div className="carousel__images" onTransitionEnd={transitionEndHandler}>
        {images.map((image, i) => {
          let id;

          if (i === 0) {
            id = "lastClone";
          } else if (i === images.length - 1) {
            id = "firstClone";
          } else {
            id = null;
          }
          return (
            <img
              className="carousel__image"
              src={image}
              alt={`image${i}`}
              key={`${image}${i}`}
              id={id}
            />
          );
        })}
      </div>
      <button className="carousel__button--next" onClick={nextButtonHandler}>
        <img
          className="button__icon"
          src="./assets/images/logos/right-arrow.svg"
        />
      </button>
    </div>
  );
};

export default Carousel;
