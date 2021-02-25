import React from "react";
import Picture from "./picture";
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
            <h3>View project </h3>
          </a>
        </Link>
      </div>
    </div>

    <div className="img">
      <img src={img} />
    </div>

    <style jsx global>{`
      .article-project {
        display: flex;
        justify-content: space-around;
        margin: 2rem 0 2rem 0;
        width: 100%;
      }
      .link-view {
        transform: translate(0px, 0px);
        transform-origin: 100% 50%;
        margin: 3rem;
      }
      .link-view a h3 {
        line-height: 1.4;
        transition: all 1s;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }
      .link-view a h3::before {
        content: "";
        position: absolute;
        left: -20px;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        background: #e4eaf1;
        border-radius: 50%;
        z-index: -1;
        transform-origin: 0% 50%;
        transition: transform 1s;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }
      .link-view a h3:hover::before,
      .link-view a h3:focus::before {
        transform: scale3d(1, 1, 1);
        width: 15rem;
        border-radius: 30px;
      }
      .title {
        padding: 1rem;
        gap: 3rem;
      }

      .title h2 {
        font-size: 3rem;
        margin: 0;
        text-transform: uppercase;
      }
      .title div .line {
        width: 40px;
        height: 1px;
        position: relative;
        background: #000;
        margin-left: 10px;
      }

      .article-project > .img > img {
        width: 20rem;
      }
      .article-project > .img img {
        filter: blur(2px);
      }
      .article-project > .img:hover img {
        filter: blur(0);
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
