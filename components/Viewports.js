import React from "react";
import Picture from "./picture";

const Viewports = ({ desktop, title, responsive, background }) => (
  <div className="viewports">
    <div className="responsive">
      <img src={responsive} />
    </div>
    <div className="desktop">
      <img src={desktop} />
    </div>
    <style jsx>{`
      .viewports {
        display: flex;
        justify-content: space-around;
        justify-items: center;
      }
      .viewports img {
        border-radius: 15px;
      }
      .responsive {
        max-width: 10vw;
      }
      .desktop {
        width: 42rem;
      }
      @media (max-width: 800px) {
        .viewport {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    `}</style>
  </div>
);

export default Viewports;
