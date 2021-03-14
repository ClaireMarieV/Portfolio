import React from "react";

const Svg = () => (
  <div className="line">
    <svg
      width="850"
      height="100"
      viewBox="0 850 100"
      xmlns="http://www.w3.org/1999/xlink"
      alt="line svg"
    >
      <path d="M8.2,52.3c0-0.1,854,0,854,0">
        <animate
          attributeName="d"
          dur="0.5s"
          begin="mouseover"
          values="M11,54c432.5,62.4,506.4-110.7,847,0.6;
            M8,80.5c279.6-4.7,338.8-167.5,847.6,0;
            M6.2,83C403-75,513,83,853.8,83;
            M5.7,79.5c466.6-182.5,568.6,37.5,847.6,0;
            M11.9,67.2c340.6-111.3,414.5,61.8,847-0.6;
            M8.2,52.3c0-0.1,854,0,854,0;"
        />
      </path>
    </svg>
    <style jsx>{`
      .line {
        display: flex;
        margin: auto;
      }
      svg {
        width: 100%;
      }
      path {
        fill: none;
        height: 3rem;
        stroke: #dedbeb;
        stroke-width: 0.4rem;
      }
    `}</style>
  </div>
);

export default Svg;
