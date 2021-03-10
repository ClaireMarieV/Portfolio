import React from "react";

const Content = ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        padding-bottom: 5rem;
        gap: 3rem;
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
