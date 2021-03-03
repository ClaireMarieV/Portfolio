import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2021/felicity.js";

const FelicityPage = () => (
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
      .pictures {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .under-content h2 {
        margin-bottom: 3rem;
      }
      @media (max-width: 800px) {
        .colors {
          grid-template-columns: auto;
        }
        .pictures {
          grid-template-columns: auto;
          justify-items: center;
        }
      }
    `}</style>
  </Layout>
);

export default FelicityPage;
