interface TrafficLightProps {
  color: string;
  active: boolean;
}

const TrafficLight = ({ color, active }: TrafficLightProps) => {
  return (
    <div className="traffic-light">
      <div
        className={`light red ${active && color === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${
          active && color === "yellow" ? "active" : ""
        }`}
      ></div>
      <div
        className={`light green ${active && color === "green" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLight;
