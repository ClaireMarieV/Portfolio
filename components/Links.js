import { useRouter } from "next/router";

const Links = ({ project }) => {
  const router = useRouter();

  return (
    <div className="link-view">
      <div className="link">
        {project.links.source && (
          <a href={project.links.source} target="_blank">
            <svg
              className="line__graphic"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="150px"
              y="75px"
              viewBox="0 0 210 120"
            >
              <path
                d="M106.9,11.7c0.8-1.9-1.9-3.8-5.5-4.7c-3.6-0.9-7.9-1-12-1C58.1,6.4,29.7,15.1,9.1,26.1c-3,1.6-6.1,3.6-4.8,5.7
        c1.5,2.4,8,3.2,13.4,3.3c21.2,0.3,41.6-3.4,61.7-6.7c4.1-0.7,8.4-1.3,12.7-1.1"
              />
            </svg>
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
            <svg
              className="line__graphic"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="150px"
              y="75px"
              viewBox="0 0 210 120"
            >
              <path
                d="M106.9,11.7c0.8-1.9-1.9-3.8-5.5-4.7c-3.6-0.9-7.9-1-12-1C58.1,6.4,29.7,15.1,9.1,26.1c-3,1.6-6.1,3.6-4.8,5.7
        	c1.5,2.4,8,3.2,13.4,3.3c21.2,0.3,41.6-3.4,61.7-6.7c4.1-0.7,8.4-1.3,12.7-1.1"
              />
            </svg>
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
