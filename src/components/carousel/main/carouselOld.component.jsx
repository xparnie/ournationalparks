/*jshint esversion: 6 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../../styles/carousel/_carousel.scss";

import Arrow from "../arrows/arrows.component";
import CarouselItem from "./carousel-item.component";

const Carousel = ({ items }) => {
  // Hooks
  const [totalCarouselItems, setTotalCarouselItems] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // DOM Elements
  const slideTransform = {
    transform: `translateX(-${currentImageIndex * (100 / totalCarouselItems)}%)`
  };

  // Gets length of items in array on load
  useEffect(() => {
    setTotalCarouselItems(items.length);
  }, [items.length]);

  // Handles arrow click on carsouel item
  const onSlideClickHandler = direction => {
    let index = null;
    const zeroTotalCarouselItems = totalCarouselItems - 1;

    if (direction === "left") {
      index =
        currentImageIndex <= 0 ? zeroTotalCarouselItems : currentImageIndex - 1;
    } else {
      index =
        currentImageIndex === zeroTotalCarouselItems
          ? 0
          : currentImageIndex + 1;
    }

    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      <ul className="carousel-list" style={slideTransform}>
        {items.map(({ id, ...otherProps }) => (
          <CarouselItem key={id} {...otherProps} />
        ))}
      </ul>
      <Arrow
        direction="right"
        clickFunction={onSlideClickHandler}
      />
      <Arrow
        direction="left"
        clickFunction={() => onSlideClickHandler("left")}
      />
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  currentImageIndex: PropTypes.number,
  currentHeight: PropTypes.number
};
