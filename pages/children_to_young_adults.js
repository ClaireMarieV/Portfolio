import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/alice.js";

const AlicePage = () => (
  <Layout>
    <SEO title="Home" />
    <Article title={article.title}>{article.content}</Article>
    <style jsx global>{`
      .content {
        display: flex;
        padding: 2rem;
      }

      .content-font:nth-child(1) .sentence > span {
        font-family: gravesend, sans-serif !important;
      }

      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      .colors .blue {
        background: #a9c1ed;
      }
      .colors .neutral {
        background: #ffe1d1;
      }
      .colors .white {
        background: #ffffff;
      }
      .under-content h2 {
        margin-bottom: 3rem;
      }
    `}</style>
  </Layout>
);

export default AlicePage;
