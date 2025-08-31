import './Pedestrian.css'

interface PedestrianProps {
  orientation: "horizontal" | "vertical";
  index: number; // para escalonar la animación
}

function Pedestrian({ orientation, index }: PedestrianProps) {
  return (
    <div
      className={`pedestrian ${orientation}`}
      style={{ animationDelay: `${index * 1.5}s` }} // escalonado
    >
      🚶
    </div>
  );
}

export default Pedestrian;
