import './Pedestrian.css'

function Pedestrian({ orientation }: { orientation: "horizontal" | "vertical" }) {
  return (
    <div
      className={`pedestrian ${orientation}`}
    >
      👤
    </div>
  );
}

export default Pedestrian;
