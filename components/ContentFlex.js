import React from "react";

const ContentFlex = ({ children }) => (
  <div className="content-flex">
    {children}
    <style jsx>{`
      .content-flex {
        display: flex;
        margin: 0 auto;
        margin-top: 3rem;
        line-height: 3rem;
      }
    `}</style>
  </div>
);

export default ContentFlex;
