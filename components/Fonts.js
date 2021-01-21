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
      #font-content p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      #font {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 3rem;
        width: 70vw;
        margin: auto;
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
      #font-content p {
        letter-spacing: 0.05em;
        transform: translate3d(-0.5em, 0, 0);
        transition: transform 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      #font-content p::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 55%;
        height: 0.5rem;
        left: 0.05em;
        top: 2.25em;
        background: #f6e056;
        transform: scale3d(1, 1, 1);
        transform-origin: 100% 50%;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
    `}</style>
  </div>
);

export default Icon;
