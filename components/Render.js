import Parallax from "./Parallax";

const Render = ({ project }) => (
  <div>
    <img
      className="render-img"
      src={project.render}
      alt="render index website"
    />
    <style jsx>{`
      .render-img {
        filter: hue-rotate(-105deg);
        margin: auto;
        object-fit: cover;
        object-position: center center;
      }
      .parallax img {
      }
    `}</style>
  </div>
);

export default Render;
