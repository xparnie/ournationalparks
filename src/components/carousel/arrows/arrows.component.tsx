import React from "react";

type ArrowProps = {
  direction: string;
  clickFunction: () => void;
};

const Arrow = ({ direction, clickFunction }: ArrowProps) => (
  <div
    className={`carousel-arrow carousel-arrow_${direction}`}
    onClick={clickFunction}
  >
    <i className={`fas fa-chevron-${direction}`}></i>
  </div>
);

export default Arrow;
