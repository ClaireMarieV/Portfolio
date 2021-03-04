import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/blog.js";

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />
    <Article
      title={article.title}
      category={article.category}
      img={article.img}
    >
      {article.content}
    </Article>
    <style jsx global>{`
      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }
      .colors .grey {
        background: #262525;
      }
      .colors .salmon {
        background: #f7c289;
      }
      .colors .white-pink {
        background: #ece0d5;
      }
      .under-content h2 {
        margin-bottom: 3rem;
      }
      .viewport-phone .viewport:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        z-index: 1;
      }
      .viewport-phone .viewport:nth-child(2) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
      }
      .final {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .final a {
        justify-self: center;
        align-self: center;
        transform: translate(0px, 0px);
        transform-origin: 100% 50%;
        margin: 1rem;
      }
      .final a h3 {
        line-height: 1.4;
        transition: all 1s;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }
      .final a h3::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        background: #efddd7;
        border-radius: 50%;
        z-index: -1;
        transform-origin: 0% 50%;
        transition: transform 1s;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      }
      .final a h3:hover::before,
      .final a h3:focus::before {
        transform: scale3d(1, 1, 1);
        width: 15rem;
        border-radius: 30px;
      }

      @media (max-width: 800px) {
        .colors {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </Layout>
);

export default BlogPage;
