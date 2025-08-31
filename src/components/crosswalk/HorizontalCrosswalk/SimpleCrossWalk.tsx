import Pedestrian from "../../pedestrian/Pedestrian";

function SimpleCrossWalk() {
  return (
    <>
      <div className="crosswalk">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="crosswalk-line"></div>
        ))}
        <Pedestrian orientation="horizontal" />
      </div>
    </>
  );
}

export default SimpleCrossWalk;
