import React from "react";
import Picture from "./picture";

const UnderContent = ({ picture, title, text, className, id }) => (
  <div className="under-content">
    <div>
      <Picture picture={picture} />
      <p>{text}</p>
    </div>
    <Picture title={title} picture={picture} />

    <style jsx>{`
      .under-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .under-content p {
        background: white;
        padding: 2rem;
        width: 20rem;
      }
    `}</style>
  </div>
);

export default UnderContent;
