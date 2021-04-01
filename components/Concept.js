import PerspectivePicture from "./PerspectivePicture";

const Concept = ({ project }) => (
  <div>
    <h4>Concept</h4>
    <PerspectivePicture>
      <img src={project.concept} alt="wireframe" />
    </PerspectivePicture>
    <style jsx>{``}</style>
  </div>
);

export default Concept;
