import Link from "next/link";
import { useRouter } from "next/router";
import { fromProject } from "../lib/link";

const ArticleProject = ({ title, category, year }) => {
  const router = useRouter();

  return (
    <div className={"project"}>
      <section>
        <div>
          <h2>{title}</h2>
          <div className="year-project">
            <span>{category}</span>
            <Link href={fromProject({ title })}>
              <a>
                <h3 className="h3">
                  {router.locale === "fr" ? `Voir le projet` : `View project`}
                </h3>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .project {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        h2 {
          margin: 0;
          text-transform: uppercase;
        }
        span {
          font-size: 1.2rem;
          color: #cbc6e0;
        }

        a > .h3 {
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default ArticleProject;
