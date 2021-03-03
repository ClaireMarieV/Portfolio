import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/alice.js";

const AlicePage = () => (
  <Layout>
    <SEO title="Home" />
    <Article title={article.title} category={article.category}>
      {article.content}
    </Article>
    <style jsx global>{`
      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
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
      .pictures {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .under-content h2 {
        margin-bottom: 3rem;
      }
    `}</style>
  </Layout>
);

export default AlicePage;
