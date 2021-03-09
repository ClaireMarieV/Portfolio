import React from "react";

const Colors = ({ code }) => (
  <div>
    <div className="color" style={{ backgroundColor: code }}></div>
    <div>{code}</div>
    <style jsx>{`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
      align-items: center;
    }
      .color {
        min-height: 3rem;
      }
      .color:nth-child(2) {
        align-sef: center;

        justify-content: center;
      }
    `}</style>
  </div>
);

export default Colors;
