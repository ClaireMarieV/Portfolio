import React from "react";

const Svg = () => (
  <div className="line">
    <svg
      width="850"
      height="100"
      viewBox="0 850 100"
      xmlns="http://www.w3.org/1999/xlink"
    >
      <path d="M8.2,52.3c0-0.1,854,0,854,0">
        <animate
          attributeName="d"
          dur="1s"
          begin="mouseover"
          values="M11,54c612.7-10.1,558.6-101.6,847,0.6;
            M8,80.5c279.6-4.7,338.8-167.5,847.6,0;
            M5.5,54.5c435.6-4,152.9-106.4,855.8,0.6;
            M6.2,83C403-75,513,83,853.8,83;
            M17.5,65.4c288.4-102.2,234.3-10.7,847-0.6;
            M8.2,52.3c0-0.1,854,0,854,0;"
        />
      </path>
    </svg>
    <style jsx>{`
      .line {
        display: flex;
        justify-content: center;
        justify-self: center;
      }
      svg {
        min-width: fit-content;
      }
      path {
        fill: none;
        height: 5rem;
        stroke: #eff2f5;
        stroke-width: 0.3rem;
        transition: all 0.1s easeOut;
      }
    `}</style>
  </div>
);

export default Svg;
