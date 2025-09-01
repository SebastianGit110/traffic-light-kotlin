import { useState } from "react";
import "./App.css";
import {
  HorizontalCrosswalk,
  TrafficLight,
  VerticalCrosswalk,
  Car,
} from "./components/index";

const currentTrafficLightState = [
  {
    lightColor: "red",
    active: false,
  },
  {
    lightColor: "green",
    active: true,
  },
];

function App() {
  const [currentLight, setCurrentLight] = useState<
    typeof currentTrafficLightState
  >(currentTrafficLightState);

  return (
    <div className="app">
      <div className="intersection-container">
        {/* Calle horizontal */}
        <div className="street horizontal">
          {/* Semáforo horizontal */}
          <div className="horizontal-light">
            <TrafficLight color={currentLight[0].lightColor} />
          </div>

          {/* Zebra peatonal (lado derecho) */}
          <HorizontalCrosswalk canCross={!currentLight[0].active} />
        </div>

        {/* Auto en la calle horizontal */}
        {currentLight[0].active &&
          Array.from({ length: 5 }).map((_, i) => (
            <Car
              direction="horizontal"
              position={{ top: "50%", left: "100px" }}
              index={i}
            />
          ))}

        {/* Calle vertical */}
        <div className="street vertical">
          {/* Semáforo vertical */}
          <div className="vertical-light">
            <TrafficLight color={currentLight[1].lightColor} />
          </div>

          {/* Zebra peatonal vertical (parte de arriba) */}
          <VerticalCrosswalk canCross={!currentLight[1].active} />
        </div>

        {/* Auto en la calle vertical */}
        {currentLight[1].active &&
          Array.from({ length: 5 }).map((_, i) => (
            <Car
              direction="vertical"
              position={{ top: "100px", left: "50%" }}
              index={i}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
