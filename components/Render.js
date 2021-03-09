import Parallax from "./Parallax";

const Render = ({ project }) => (
  <div>
    <Parallax>
      <h4>Render Home</h4>
    </Parallax>
    <img src={project.render} />
  </div>
);

export default Render;
