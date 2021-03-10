import React from "react";

const Colors = ({ code, name }) => (
  <div>
    <div className="color" style={{ backgroundColor: code }}></div>
    <div className="name">
      <span>{name}</span>
    </div>
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
        visibility: hidden;
      }
      .name {
        align-self: center;
        justify-content: center;
      }
      span {
        font-weight: 600;
        font-size: 1.2rem;
      }
      @media (max-width: 700px) {
        margin: 1rem 0 1rem 0;
      }
    `}</style>
  </div>
);

export default Colors;
