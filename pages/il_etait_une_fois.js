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
      @media (max-width: 800px) {
        .colors {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </Layout>
);

export default BlogPage;
