function SimpleCrossWalk() {
  return (
    <>      
      <div className="crosswalk">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="crosswalk-line"></div>
        ))}
      </div>
    </>
  );
}

export default SimpleCrossWalk;
