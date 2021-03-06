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
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default Colors;
