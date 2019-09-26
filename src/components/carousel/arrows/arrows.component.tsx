import * as React from "react";

interface ArrowProps {
  direction: string;
  clickFunction: any;
}

const Arrow: React.FC<ArrowProps> = ({ direction, clickFunction }) => (
  <div
    className={`carousel-arrow carousel-arrow_${direction}`}
    onClick={clickFunction}
  >
    <i className={`fas fa-chevron-${direction}`}></i>
  </div>
);

export default Arrow;
