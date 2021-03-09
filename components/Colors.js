import Color from "./Color";

const Colors = ({ project }) => (
  <div>
    <h3>Colors</h3>
    <div className="colors">
      {project.colors.map((color) => (
        <Color key={color.code} code={color.code} />
      ))}
    </div>
    <style jsx>{`
      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-self: center;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Colors;
