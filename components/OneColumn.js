import React from "react";

const OneColumn = ({ children }) => (
  <div className="one-column">
    {children}
    <style jsx>{`
      .one-column {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto 4rem auto;
        line-height: 3rem;
        gap: 4rem;
        padding: 2rem;
      }
    `}</style>
  </div>
);

export default OneColumn;
