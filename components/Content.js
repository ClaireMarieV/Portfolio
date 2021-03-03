import React from "react";

const Content = ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        margin: auto;
        padding-top: 5rem;
        padding-bottom: 5rem;
        gap: 5rem;
      }
      @media (max-width: 500px) {
        grid-gap: 3rem;
      }
    `}</style>
  </div>
);

export default Content;
