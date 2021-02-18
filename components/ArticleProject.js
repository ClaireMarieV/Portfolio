import React from "react";
import Picture from "./picture";
import Link from "next/link";

import Parallax from "../components/Parallax";
import { fromArticle } from "../lib/link";

const ArticleProject = ({ title, category, className }) => (
  <div id="article-project" className={"article-project-" + (className || "")}>
    <Link href={fromArticle({ title })}>
      <a>
        <div className="title">
          <Parallax>
            <h3>{category}</h3>
            <h2>{title}</h2>
          </Parallax>
        </div>
      </a>
    </Link>

    <style jsx global>{`
      #article-project {
        width: 23vw;
        transition: all 0.2s;
      }
      #article-project:hover {
        transition: all 0.2s;
      }
      .title {
        top: 0;
        left: 0;
        padding: 1rem;
        width: 100%;
        height: 100%;
      }

      .title h3 {
        color: #cfaca2;
        font-weight: bolder;
        font-size: 1.5rem;
      }
      .title h2 {
        font-size: 3rem;
        font-weight: 400;
        padding: 1rem;
        margin: 0;
      }
    `}</style>

    <style jsx>{`
      //SMARTPHONE & TABLETTE
      @media (max-width: 800px) {

      @media (max-width: 400px) {

      }
    `}</style>
  </div>
);

export default ArticleProject;
