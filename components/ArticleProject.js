import React from "react";
import Link from "next/link";

import Parallax from "../components/Parallax";
import { fromArticle } from "../lib/link";

const ArticleProject = ({ title, category, img, imgHover, className }) => (
  <div className={"article-project"}>
    <div className="title">
      <div>
        <h2>{title}</h2>
        <span>{category}</span>
      </div>
      <div className="link-view">
        <Link href={fromArticle({ title })}>
          <a>
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
                stroke-dasharray="172.4788055419922"
                d="M106.9,11.7c0.8-1.9-1.9-3.8-5.5-4.7c-3.6-0.9-7.9-1-12-1C58.1,6.4,29.7,15.1,9.1,26.1c-3,1.6-6.1,3.6-4.8,5.7
          c1.5,2.4,8,3.2,13.4,3.3c21.2,0.3,41.6-3.4,61.7-6.7c4.1-0.7,8.4-1.3,12.7-1.1"
              />
            </svg>
            <h3>View project </h3>
          </a>
        </Link>
      </div>
    </div>

    <style jsx global>{`
      .article-project {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
      }

      .link-view {
        position: relative;
      }
      .link-view svg {
        width: 100%;
        position: absolute;
        z-index: -1;
      }
      .link-view path {
        fill: none;
        stroke: #000000;
        stroke-width: 0.7;
        stroke-dasharray: 200.49;
        stroke-dashoffset: 200.49;
        visibility: hidden;
        transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
      }
      .link-view:hover path {
        visibility: visible;
        stroke-dasharray: 200.49;
        stroke-dashoffset: 0;
        transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
        transition-duration: 0.5s;
      }
      .title {
        padding: 1rem;
      }
      .title h2 {
        margin: 0;
        text-transform: uppercase;
      }
    `}</style>

    <style jsx>{`
      //SMARTPHONE & TABLETTE
      @media (max-width: 800px) {
      }

      @media (max-width: 400px) {
      }
    `}</style>
  </div>
);

export default ArticleProject;
