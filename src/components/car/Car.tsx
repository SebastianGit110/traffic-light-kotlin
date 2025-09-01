import React from "react";
import "./Car.css";

interface CarProps {
  direction: "horizontal" | "vertical";
  position?: { top?: string; left?: string };
  index: number;
}

const Car: React.FC<CarProps> = ({ direction, position, index }) => {
  return (
    <div
      className={`car ${direction}`}
      style={{
        top: position?.top,
        left: position?.left,
        animationDelay: `${index * 1.5}s`,
      }}
    >
      <div className="car-top"></div>
      <div className="car-body"></div>
      <div className="car-bottom"></div>
    </div>
  );
};

export default Car;
