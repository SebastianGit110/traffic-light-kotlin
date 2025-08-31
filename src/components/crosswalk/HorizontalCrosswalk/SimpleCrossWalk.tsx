import Pedestrian from "../../pedestrian/Pedestrian";

interface CrossWalkProps {
  canCross: boolean;
}

function CrossWalk({ canCross }: CrossWalkProps) {
  return (
    <div className="crosswalk">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="crosswalk-line"></div>
      ))}

      {canCross &&
        Array.from({ length: 5 }).map((_, i) => (
          <Pedestrian key={i} orientation="vertical" index={i} />
        ))}
    </div>
  );
}

export default CrossWalk;
