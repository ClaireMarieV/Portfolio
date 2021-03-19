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
          <h3 className="h3">View project </h3>
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
      .link-view {
        position: relative;
        max-width: fit-content;
        padding: 1rem;
      }

      a > .h3 {
        font-weight: 400;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .link-view a > .h3::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        top: calc(50%);
        transform: scale3d(0, 1, 1);
        transform-origin: 0% 50%;
        transition: transform 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .link-view a:hover .h3::before,
      .link-view a:focus .h3::before {
        transform: scale3d(1, 1, 1);
      }
      a .h3::before {
        background: #1d201f;
      }

      .h3 {
        padding: 0;
      }
    `}</style>
  </div>
);

export default ArticleLogo;
