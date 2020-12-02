import React from "react";

const imgRow = ({ children }) => (
  <div className="imgContainer">
    {children}
    <style jsx>{`
      .imgContainer {
        width: 100%;
        max-width: 25vh;
        margin: auto;
      }
    `}</style>
  </div>
);
export default imgRow;
