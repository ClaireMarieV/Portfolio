import Fonts from "./Fonts";

const Typography = ({ project }) => (
  <div>
    <h3>Typography</h3>
    <Fonts fonts={project.fonts} />
  </div>
);

export default Typography;
