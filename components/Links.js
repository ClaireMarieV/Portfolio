const Links = ({ project }) => (
  <div>
    <a href={project.links.source} target="_blank">
      <h3>View source code</h3>
    </a>
  </div>
);

export default Links;
