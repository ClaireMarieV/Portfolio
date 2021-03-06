import React from "react";

const Colors = ({ code }) => (
  <div>
    <div className="color" style={{ backgroundColor: code }}></div>
    <div>{code}</div>
    <style jsx>{`
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .color {
        min-height: 3rem;
      }
    `}</style>
  </div>
);

export default Colors;
