const Links = ({ project }) => (
  <div>
    {project.links.source && (
      <a href={project.links.source} target="_blank">
        <h3>View source code</h3>
      </a>
    )}
    {project.links.website && (
      <a href={project.links.website} target="_blank">
        <h3>View website</h3>
      </a>
    )}
  </div>
);

export default Links;
