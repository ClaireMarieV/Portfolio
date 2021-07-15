import { useRouter } from "next/router";
import { useState } from "react";

const Links = ({ project }) => {
  const router = useRouter();
  return (
    <section className="link-view">
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
        .link {
          position: relative;
          transition: 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .link a h3::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.7rem;
          z-index: -1;
          opacity: 0.8;
          background: #dedbeb;
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        /* Hover */

        .link a:hover h3::before,
        .link a:focus h3::before {
          transform: scale3d(1, 1, 1);
        }
        @media (max-width: 600px) {
          .link-view {
            grid-template-columns: auto;
          }
        }
      `}</style>
    </section>
  );
};
export default Links;
