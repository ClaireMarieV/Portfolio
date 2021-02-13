import React from "react";

const ContentGrid = ({ children }) => (
  <div className="content-grid">
    {children}
    <style jsx>{`
      .content-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin: 0 auto;
        margin-top: 3rem;
        line-height: 3rem;
      }
    `}</style>
  </div>
);

export default ContentGrid;