import { useRouter } from "next/router";

const Links = ({ project }) => {
  const router = useRouter();

  return (
    <div className="link-view">
      <div className="link">
        {project.links.source && (
          <a href={project.links.source} target="_blank">
            <h3>
              {router.locale === "fr"
                ? `Voir le code source `
                : `View source code`}
            </h3>
          </a>
        )}
      </div>
      <div className="link">
        {project.links.website && (
          <a href={project.links.website} target="_blank">
            <h3>{router.locale === "fr" ? `Voir le site ` : `View website`}</h3>
          </a>
        )}
      </div>

      <style jsx>{`
        .link-view {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
        }

        .link-view a h3 {
          line-height: 1.4;
          transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
          margin: 1rem;
        }
        .link {
          position: relative;
        }
        .link svg {
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          z-index: -1;
        }

        path {
          fill: none;
          stroke: #000000;
          stroke-width: 1;
          stroke-dasharray: 200.49;
          stroke-dashoffset: 200.49;
          transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
        }
        .link:hover path {
          stroke-dasharray: 200.49;
          stroke-dashoffset: 0;
          transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
          transition-duration: 0.5s;
        }
        @media (max-width: 600px) {
          .link-view {
            grid-template-columns: auto;
          }
        }
      `}</style>
    </div>
  );
};
export default Links;
