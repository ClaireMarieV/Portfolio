import { useRouter } from "next/router";

const Goals = ({ project }) => {
  const router = useRouter();
  return (
    <section>
      <div className="years">
        <h2>Years</h2>
        <p>{project.years}</p>
      </div>
      <div className="role">
        <h2>my role</h2>
        <p>{project.role[router.locale]}</p>
      </div>
      <div className="goals">
        <h2>Goals</h2>
        <p>{project.goals[router.locale]}</p>
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
                <h3>
                  {router.locale === "fr" ? `Voir le site ` : `View website`}
                </h3>
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .goals {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        p {
          margin: 0;
        }
        .role {
          gap: 1rem;
          display: flex;
          flex-direction: column;
        }
        h2 {
          text-transform: uppercase;
        }
        .years {
          gap: 1rem;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 700px) {
          section {
            grid-template-columns: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Goals;
