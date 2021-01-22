import React from "react";

const Parallax = ({ children }) => (
  <div className="parallax">
    {children}
    <style jsx>{`
      .parallax {
        display: block;
        width: 100%;
        min-height: 100vh;
        top: 0;
        right: 0;
        left: 0;
        z-index: -3;
        position: relative;
      }

      // .parallax::before {
      //   content: "";
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   max-height: 100vh;
      //   z-index: 6;
      // }
    `}</style>
  </div>
);
export default Parallax;
