interface TrafficLightProps {
  color: string;
}

const TrafficLight = ({ color }: TrafficLightProps) => {
  return (
    <div className="traffic-light">
      <div className={`light red ${color === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${color === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`light green ${color === "green" ? "active" : ""}`}></div>
    </div>
  );
};

export default TrafficLight;
