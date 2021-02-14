import React from "react";
import Picture from "./picture";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleProject = ({ title }) => (
  <div className="article-project">
    <Link href={fromArticle({ title })}>
      <a>
        <div className="title">
          <h2>{title}</h2>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .title h3 {
        font-size: 2rem;
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
