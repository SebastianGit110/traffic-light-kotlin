function SimpleCrossWalk() {
  return (
    <>
      <div className="crosswalk-vertical">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="crosswalk-vertical-line"></div>
        ))}
      </div>
    </>
  );
}

export default SimpleCrossWalk;
