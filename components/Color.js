import { useState, useEffect } from "react";

const Colors = ({ hex, className }) => (
  <div className="colorHex">
    <div className={className}></div>
    <div className="hex">{hex}</div>

    <style jsx>{`
      .colorHex {
        display: grid;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
        align-self: center;
      }
      .color {
        width: 20vw;
        height: 2.5rem;
        border-radius: 10px;
      }
      .hex {
        margin: auto;
      }
    `}</style>
  </div>
);

export default Colors;
