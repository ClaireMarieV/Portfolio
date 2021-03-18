import Link from "next/link";
import { fromLogo } from "../lib/link";

const ArticleLogo = ({ title, category, year, img, imgHover, className }) => (
  <div className={"article-project"}>
    <section>
      <h2>{title}</h2>
      <span>{category}</span>

      <div className="title">
        <img src="/svg/arrowProject.svg" />
        <div>
          <span>{year}</span>
        </div>
      </div>
    </section>
    <div className="link-view">
      <Link href={fromLogo({ title })}>
        <a>
          <h3>View project </h3>
        </a>
      </Link>
    </div>

    <style jsx>{`
      .article-project {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      svg {
        width: 100%;
        position: absolute;
        z-index: -1;
      }
      path {
        fill: none;
        stroke: #000000;
        stroke-width: 0.6;
      }
      .link-view {
        display: grid;
        grid-template-columns: auto auto;
      }
      .title {
        display: flex;
        padding: 1rem;
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
        align-self: center;
      }
      .title img {
        max-width: 5rem;
      }
      .title > div > span {
        font-size: 1.5em;
      }
    `}</style>
  </div>
);

export default ArticleLogo;
