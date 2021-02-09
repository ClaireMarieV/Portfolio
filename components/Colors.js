import { useState, useEffect } from "react";

const Colors = ({ color, hex }) => (
  <div className="colors">
    <div className="color"></div>
    <div className="hex">{hex}</div>

    <style jsx>{`
      .colors {
        display: grid;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        gap: 1rem;
        align-self: center;
      }
      .color {
        width: 20rem;
        height: 2.5rem;
        border-radius: 10px;
      }
    `}</style>
  </div>
);

export default Colors;
