import { useState, useEffect } from "react";

const Colors = ({ color, hex }) => (
  <div className="colorHex">
    <div className="color"></div>
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
    `}</style>
  </div>
);

export default Colors;
