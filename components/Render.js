import PerspectivePicture from "./PerspectivePicture";

const Render = ({ project }) => (
  <div>
    <h4>Render Home</h4>
    <PerspectivePicture>
      <img src={project.render} alt="render index website" />
    </PerspectivePicture>
    <style jsx>{``}</style>
  </div>
);

export default Render;
