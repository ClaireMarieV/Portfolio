import React from "react";

const ContentGrid = ({ children }) => (
  <div className="content-grid">
    {children}
    <style jsx>{`
      .content-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto 4rem auto;
        line-height: 3rem;
        gap: 4rem;
        width: 44%;
      }
      @media (max-width: 1100px) {
        .content-grid {
          width: 60%;
        }
      }

      @media (max-width: 800px) {
        .content-grid {
          grid-template-columns: repeat(1, 1fr);
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default ContentGrid;
