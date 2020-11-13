import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState(0);

  const image = document.querySelectorAll(".carousel__image"); // carouselImages
  const carousel = document.querySelector(".carousel__images"); // carouselSlide

  const previousButtonHandler = () => {
    setCounter(counter - 1);
    carousel.style.transition = "all 0.7s ease-in-out";
  };

  const nextButtonHandler = () => {
    setCounter(counter + 1);
    carousel.style.transition = "all 0.7s ease-in-out";
  };

  const transitionEndHandler = () => {
    if (carousel) {
      console.log("image", image[counter]);
      if (image[counter].id === "lastClone") {
        carousel.style.transition = "none";
        setCounter(image.length - 2);
      }
      if (image[counter].id === "firstClone") {
        carousel.style.transition = "none";
        setCounter(image.length - 7);
      }
    }
  };

  useEffect(() => {
    if (image.length) {
      setSize(image[0].clientWidth);
    }
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
        Prev
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
        Next
      </button>
    </div>
  );
};

export default Carousel;
