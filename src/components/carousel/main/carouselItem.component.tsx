import * as React from "react";

interface CarouselItemProps {
  id: number;
  imageUrl: string;
  altText?: string;
  title: string;
  subTitle: string;
}

const CarouselItem: React.FunctionComponent<CarouselItemProps> = ({
  id,
  imageUrl,
  altText,
  title,
  subTitle
}) => {
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
