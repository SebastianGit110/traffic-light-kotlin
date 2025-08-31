import React from "react";
import "./Car.css";

interface CarProps {
  direction: "horizontal" | "vertical";
  position?: { top?: string; left?: string };
}

const Car: React.FC<CarProps> = ({ direction, position }) => {
  return (
    <div
      className={`car ${direction}`}
      style={{
        top: position?.top,
        left: position?.left,
      }}
    >
      <div className="car-top"></div>
      <div className="car-body"></div>
      <div className="car-bottom"></div>
    </div>
  );
};

export default Car;
