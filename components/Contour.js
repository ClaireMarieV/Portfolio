import React from "react";

const Svg = ({ text }) => (
  <div className="surrounded-words">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="300px"
      y="150px"
      viewBox="0 0 266 120"
    >
      <path
        d="M106.9,11.7c0.8-1.9-1.9-3.8-5.5-4.7c-3.6-0.9-7.9-1-12-1C58.1,6.4,29.7,15.1,9.1,26.1c-3,1.6-6.1,3.6-4.8,5.7
    	c1.5,2.4,8,3.2,13.4,3.3c21.2,0.3,41.6-3.4,61.7-6.7c4.1-0.7,8.4-1.3,12.7-1.1"
      />
    </svg>
    <h2>{text}</h2>

    <style jsx>{`
      path {
        fill: none;
        stroke: #000000;
        stroke-width: 1;
        stroke-miterlimit: 10;
      }
      .surrounded-words {
        position: relative;
      }
      .surrounded-words svg {
        width: 85%;
        position: absolute;
        transform: translateX(-70%) translateY(-17%);
        left: 50%;
        top: 50%;
        z-index: -1;
      }
    `}</style>
  </div>
);

export default Svg;
