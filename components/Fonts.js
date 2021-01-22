import React from "react";
import Picture from "./picture";

const Icon = ({ font, letters, sentence, className, id }) => (
  <div id="font-content">
    <div id="font">
      <h2>{font}</h2>
      <span>{sentence}</span>
    </div>
    <p>{letters}</p>

    <style jsx>{`
      #font {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 3rem;
        width: 70vw;
        margin: auto;
        z-index: 2;
      }

      #font span {
        font-weight: 300;
        font-size: 1.5rem;
        align-self: center;
        justify-self: center;
      }
      #font h2 {
        align-self: center;
        justify-self: center;
        font-size: 2rem;
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default Icon;
