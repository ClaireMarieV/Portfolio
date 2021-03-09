import React from "react";

const Sketches = ({ sketches, text }) => (
  <>
    <div className="sketches">
      <img src={sketches} />
      <p>{text}</p>
    </div>
  </>
);
export default Sketches;
