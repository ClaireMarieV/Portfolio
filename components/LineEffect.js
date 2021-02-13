import { useState, useEffect } from "react";

const LineEffect = ({ color, hex }) => (
  <div className="line">
    <span className="color">SHOES</span>

    <style jsx>{`
      .line .color {
        transition: all 1s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .line .color::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 4rem;
        height: 1rem;
        opacity: 0.8;
        transform: scale3d(1, 1, 1);
        transition: transform 1s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }

      a .span::before {
        background: #f7c289;
      }
    `}</style>
  </div>
);

export default LineEffect;
