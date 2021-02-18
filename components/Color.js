import React from "react";

const Colors = ({ hex, className }) => (
  <div className="colorHex">
    <div className={className}></div>
    <span className="hex">{hex}</span>
    <style jsx>{`
      .colorHex {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        align-self: center;
        width: 100%;
      }
      .colorHex div:nth-child(1) {
        width: 25rem;
        height: 2rem;
        width: 100%;
      }
      .hex {
        margin: auto;
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default Colors;
