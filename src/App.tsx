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
    lightColor: "green",
    active: true,
  },
  {
    lightColor: "yellow",
    active: true,
  },
];

function App() {
  const [currentLight, setCurrentLight] = useState<any>(
    currentTrafficLightState
  );

  return (
    <div className="app">
      <div className="intersection-container">
        {/* Calle horizontal */}
        <div className="street horizontal">
          {/* Semáforo horizontal */}
          <div className="horizontal-light">
            <TrafficLight
              color={currentLight[0].lightColor}
              active={currentLight[0].active}
            />
          </div>

          {/* Zebra peatonal (lado derecho) */}
          <HorizontalCrosswalk canCross={true} />
        </div>
        {/* Auto en la calle horizontal */}
        <Car direction="horizontal" position={{ top: "50%", left: "100px" }} />

        {/* Calle vertical */}
        <div className="street vertical">
          {/* Semáforo vertical */}
          <div className="vertical-light">
            <TrafficLight
              color={currentLight[1].lightColor}
              active={currentLight[1].active}
            />
          </div>

          {/* Zebra peatonal vertical (parte de arriba) */}
          <VerticalCrosswalk canCross={false} />
        </div>
        {/* Auto en la calle vertical */}
        <Car direction="vertical" position={{ top: "100px", left: "50%" }} />
      </div>
    </div>
  );
}

export default App;
