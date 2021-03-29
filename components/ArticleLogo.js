import Link from "next/link";
import { useRouter } from "next/router";
import { fromLogo } from "../lib/link";
import SVG from "./Svg";

const ArticleLogo = ({ title, category, year }) => {
  const router = useRouter();

  return (
    <div className={"article-project"}>
      <section>
        <div>
          <h2>{title}</h2>
          <span>{category[router.locale]}</span>

          <div className="title">
            <div>
              <span>{year}</span>
            </div>
          </div>
          <div className="link-view">
            <img src="/svg/arrowProject.svg" />

            <Link href={fromLogo({ title })}>
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
        .article-project {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        svg {
          width: 50%;
          z-index: -1;
        }
        path {
          fill: none;
          stroke: #000000;
          stroke-width: 0.3px;
          stroke-miterlimit: 10;
        }
        h2 {
          margin: 0;
          text-transform: uppercase;
        }
        h2 > span {
          font-size: 1.5rem;
        }
        .title > div {
          display: flex;
          flex-direction: column;
          color: #f7c289;
        }
        .link-view img {
          max-width: 5rem;
        }
        .title > div > span {
          font-size: 1.5em;
        }
        .link-view {
          display: flex;
          align-items: center;
          position: relative;
        }

        a > .h3 {
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default ArticleLogo;
