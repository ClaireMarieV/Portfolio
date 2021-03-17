import React from "react";

const Svg = ({ text }) => (
  <div className="surrounded-words">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="300px"
      y="150px"
      viewBox="0 0 210 120"
    >
      <path
        d="M107.4,15.4c0.9-1.8-1.6-3.9-5.1-5.1s-7.8-1.6-11.9-1.9C59.1,6.6,30.2,13.3,8.8,22.8c-3.1,1.4-6.3,3.2-5.2,5.3
    	c1.3,2.5,7.7,3.8,13.1,4.3c21.1,1.8,41.7-0.4,62-2.3c4.1-0.4,8.5-0.7,12.7-0.2"
      />
    </svg>
    <h2>{text}</h2>

    <style jsx>{`
      path {
        fill: none;
        stroke: #000000;
        stroke-width: 0.7;
        stroke-miterlimit: 10;
        opacity: 0.8;
      }
      .surrounded-words {
        position: relative;
      }
      .surrounded-words svg {
        width: 100%;
        position: absolute;
        transform: translateX(-70%) translateY(-17%);
        left: 60%;
        top: 50%;
        z-index: -1;
      }
      @media (max-width: 800px) {
        .surrounded-words svg {
          width: 90%;
        }
        parh {
          stroke-width: 1.5;
        }
      }
    `}</style>
  </div>
);

export default Svg;
