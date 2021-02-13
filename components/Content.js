import React from "react";

const Content = ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-template-rows: auto;
        margin: auto;
        width: 80vw;
        grid-gap: 7rem;
      }
    `}</style>
  </div>
);

export default Content;
