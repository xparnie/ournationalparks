import React, { useState, useEffect } from "react";

import "../../../styles/carousel/_carousel.scss";

import Arrow from "../arrows/arrows.component";
import CarouselItem from "./carouselItem.component";

type CarouselProps = {
  items: (number | string | any)[];
  onSlideClickHandler: () => void;
};

const Carsouel = ({ items }: CarouselProps) => {
  const [totalCarouselItems, setTotalCarouselItems] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const slideTransform: any = {
    transform: `translateX(-${currentImageIndex * (100 / totalCarouselItems)}%)`
  };

  useEffect((): void => {
    setTotalCarouselItems(items.length);
  }, [items.length]);

  const onSlideClickHandler = (direction: string) => {
    let index: number = 0;

    const zeroBaseTotalCarouselItems: number = totalCarouselItems - 1;

    if (direction === "left") {
      index =
        currentImageIndex <= 0
          ? zeroBaseTotalCarouselItems
          : currentImageIndex - 1;
    } else {
      index =
        currentImageIndex === zeroBaseTotalCarouselItems
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
        clickFunction={() => onSlideClickHandler("right")}
      />
      <Arrow
        direction="left"
        clickFunction={() => onSlideClickHandler("left")}
      />
    </div>
  );
};

export default Carsouel;
