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
        width: 70vw;
        grid-gap: 7rem;
      }
      @media (max-width: 500px) {
        grid-gap: 3rem;
      }
    `}</style>
  </div>
);

export default Content;
