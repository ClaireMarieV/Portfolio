const Links = ({ project }) => (
  <div className="link-view">
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
    <style jsx>{`
      .link-view {
        display: grid;
        grid-template-columns: 1fr;
      }
      .link-view a {
        justify-self: center;
        align-self: center;
        transform: translate(0px, 0px);
        transform-origin: 100% 50%;
        margin: 1rem;
      }
      .link-view a h3 {
        line-height: 1.4;
        transition: all 1s;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        margin: 1rem;
      }
      .link-view a h3::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        background: #efddd7;
        border-radius: 50%;
        z-index: -1;
        transform-origin: 0% 50%;
        transition: transform 1s;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }
      .link-view a h3:hover::before,
      .link-view a h3:focus::before {
        transform: scale3d(1, 1, 1);
        width: 15rem;
        border-radius: 30px;
      }
    `}</style>
  </div>
);

export default Links;
