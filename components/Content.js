import React from "react";

const Content = ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        margin: 4rem 2rem 0 2rem;
        padding-bottom: 5rem;
        gap: 5rem;
      }
      @media (max-width: 600px) {
        .content {
          grid-gap: 3rem;
          margin: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Content;
