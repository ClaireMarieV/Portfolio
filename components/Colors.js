import React from "react";
import Color from "./Color";

const Colors = ({ project }) => (
  <section>
    <h4>Colors</h4>
    <div className="colors">
      {project.colors.map((color) => (
        <Color key={color.code} name={color.name} code={color.code} />
      ))}
    </div>
    <style jsx>{`
      width: 100%;
      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-self: center;
        width: 100%;
      }

      @media (max-width: 700px) {
        .colors {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </section>
);

export default Colors;
