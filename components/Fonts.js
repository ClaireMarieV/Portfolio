import React from "react";
import Picture from "./picture";

const Icon = ({
  font,
  fontSecondary,
  letters,
  sentence1,
  sentence2,
  sentence3,
  sentence4,
  weight,
  weight2,
  text,
  className,
  id,
}) => (
  <div id="font">
    <div>
      <h1>{letters}</h1>
    </div>
    <div className="content-font">
      <div className="font">
        <div id="span">
          <span>Primary: </span>
          <span>{font}</span>
        </div>
        <div id="span">
          <span>Weight: </span>
          <span>{weight}</span>
        </div>
      </div>
      <div className="sentence">
        <span>{sentence1}</span>
        <span>{sentence2}</span>
      </div>
    </div>
    <div className="content-font">
      <div className="font">
        <div>
          <span>Secondary: </span>
          <span>{fontSecondary}</span>
        </div>
        <div>
          <span>Weight: </span>
          <span>{weight2}</span>
        </div>
      </div>

      <div className="sentence2">
        <span>{sentence3}</span>
        <span>{sentence4}</span>
      </div>
    </div>
    <div>
      <h2>{text}</h2>
    </div>
    <style jsx>{`
      #font {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        width: 80vw;
        margin: auto;
      }

      #font span {
        font-size: 1.2rem;
        align-self: center;
        justify-self: center;
      }
      #font h2 {
        align-self: center;
        justify-self: center;
        font-size: 2rem;
        font-weight: 600;
      }
      .content-font {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        justify-items: baseline;
      }
      .font {
        display: flex;
        flex-direction: row;
        gap: 2rem;
      }
      .sentence {
        display: flex;
        flex-direction: column;
        font-weight: 600;
      }
      .sentence2 {
        display: flex;
        flex-direction: column;
        font-weight: 300;
      }
      #span span:nth-child(2) {
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default Icon;
