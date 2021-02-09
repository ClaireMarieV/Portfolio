import React from "react";

const Svg = () => (
  <div className="line">
    <svg id="line" viewBox="0 0 300 50" xmlns="http://www.w3.org/1999/xlink">
      <path d="M13.6,21.9c0-0.7,352.1,1.2,354,0">
        <animate
          attributeName="d"
          dur="1s"
          begin="mouseover"
          values="M21.1,87.8c0-0.7,170.5-170.7,353.4-2.8;
              M13.5,55.9c0-0.7,167.5-80.9,353.4-2.8;
              M13.6,21.9c0-0.7,352.1,1.2,354,0;
              M13.5,55.9c0-0.7,167.5-80.9,353.4-2.8;
              M12.3,55.9c0-0.7,101.5-80.9,353.6-2.8;
              M13.6,21.9c0-0.7,352.1,1.2,354,0"
        />
      </path>
      <style jsx>{`
        .line {
          z-index: 1
          display:flex;
        }
        svg {
          min-width: fit-content;
        }
        path {
          fill: none;
          height: 5rem;
          stroke: #EFF2F5;
          stroke-width: 2;
          transition: all 0.35s easeOut;
        }
      `}</style>
    </svg>
  </div>
);

export default Svg;
