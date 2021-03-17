import Fonts from "./Fonts";

const Typography = ({ project }) => (
  <div>
    <h4>Typography</h4>
    <Fonts fonts={project.fonts} />
    <style jsx>{``}</style>
  </div>
);

export default Typography;
