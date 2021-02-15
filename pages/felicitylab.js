import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2021/felicity.js";

const FelicityPage = () => (
  <Layout>
    <SEO title="Home" />
    <Article title={article.title} img={article.img}>
      {article.content}
    </Article>
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
      .colors .dark-blue {
        background: #1e1d28;
      }
      .colors .yellow {
        background: #fff952;
      }
      .colors .white {
        background: #fbf6f6;
      }
      .colors .grey {
        background: #ededf2;
      }
      .under-content h2 {
        margin-bottom: 3rem;
      }
    `}</style>
  </Layout>
);

export default FelicityPage;
