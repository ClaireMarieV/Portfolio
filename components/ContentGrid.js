import React from "react";

const ContentGrid = ({ children }) => (
  <div className="content-grid">
    {children}
    <style jsx>{`
      .content-grid {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto 4rem auto;
        line-height: 3rem;
        gap: 4rem;
      }
      @media (max-width: 800px) {
        .content-grid {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    `}</style>
  </div>
);

export default ContentGrid;
