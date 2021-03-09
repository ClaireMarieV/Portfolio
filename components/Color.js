import React from "react";

const Colors = ({ code }) => (
  <div>
    <div className="color" style={{ backgroundColor: code }}></div>
    <div className="code">
      <span>{code}</span>
    </div>
    <style jsx>{`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;
      align-items: center;
      position: relative;
      justify-content: center;

      .color {
        min-height: 3rem;
      }
      .code {
        align-self: center;
        justify-content: center;
      }
      .code span {
        font-weight: 600;
        font-size: 1.2rem;
      }
    `}</style>
  </div>
);

export default Colors;
