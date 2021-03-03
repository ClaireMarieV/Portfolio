import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/blob.js";

const BlobPage = () => (
  <Layout>
    <SEO title="Home" />
    <Article title={article.title} img={article.img}>
      {article.content}
    </Article>
    <style jsx global>{`
      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }
      .colors .salmon {
        background: #a7d4b7;
      }
      .colors .green {
        background: #f7c289;
      }
      .colors .white {
        background: #ece0d5;
      }
      .under-content h2 {
        margin-bottom: 3rem;
      }
      @media (max-width: 800px) {
        .colors {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </Layout>
);

export default BlobPage;
