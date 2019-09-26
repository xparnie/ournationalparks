import * as React from "react";

type CarouselItemProps = {
  id: number;
  imageUrl: string;
  altText?: string;
  title: string;
  subTitle: string;
};

const CarouselItem = ({
  id,
  imageUrl,
  altText,
  title,
  subTitle
}: CarouselItemProps) => {
  return (
    <li key={id} className="carousel-list-item">
      <img
        className="carousel-list-item-image"
        src={`${imageUrl}`}
        alt={`${altText}`}
      />

      <div className="carousel-list-item-headline">
        <span className="carousel-list-item-headline-title">{title}</span>
        <span className="carousel-list-item-headline-subtitle">{subTitle}</span>
      </div>
    </li>
  );
};

export default CarouselItem;
