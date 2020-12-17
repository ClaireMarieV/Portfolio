import React from "react";
import Picture from "./picture";

const Icon = ({ picture, title, className, id }) => (
  <div className="icons">
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="container">
      <Picture className="picture" picture={picture} />
    </div>

    <style jsx>{`
      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: auto;
        margin-bottom: 4rem;
      }

      .container {
        display: flex;
        justify-content: flex-start;
        max-width: 20vw;
        max-height: 25vh;
        width: 100%;
      }

      .title {
        z-index: -1;
        position: absolute;
      }
      .title h3 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      span {
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 100;
        font-size: 2rem;
        padding: 2em;
        text-align: justify;
        color: #ffff;
      }
    `}</style>

    <style jsx>{`
      //SMARTPHONE & TABLETTE

      @media (max-width: 800px) {
        .container {
          max-width: 67vw;
          width: 100%;
          margin: auto;
        }
        .title h2 {
          font-size: 3.5rem;
        }
      }
      @media (max-width: 400px) {
        .title h2 {
          font-size: 2.5rem;
        }
      }
    `}</style>
  </div>
);

export default Icon;
