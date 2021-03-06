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
        margin: auto;
        object-fit: cover;
      }
      .parallax img {
      }
    `}</style>
  </div>
);

export default Render;
