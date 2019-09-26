import * as React from "react";

import "../../../styles/carousel/_carousel.scss";

import Arrow from "../arrows/arrows.component";
import CarouselItem from "./carouselItem.component";

interface CarouselProps {
  items: (number | string | any)[];
}

const Carsouel: React.FC<CarouselProps> = ({ items }) => {
  const [totalCarouselItems, setTotalCarouselItems] = React.useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

  const slideTransform: any = {
    transform: `translateX(-${currentImageIndex * (100 / totalCarouselItems)}%)`
  };

  React.useEffect(() => {
    setTotalCarouselItems(items.length);
  }, [items.length]);

  const onSlideClickHandler = (direction: string): void => {
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
      <Arrow direction="right" clickFunction={onSlideClickHandler} />
      <Arrow
        direction="left"
        clickFunction={() => onSlideClickHandler("left")}
      />
    </div>
  );
};

export default Carsouel;
