import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/alice.js";

const AlicePage = () => (
  <Layout>
    <SEO title="Home" />
    <Article title={article.title} img={article.img}>
      {article.content}
    </Article>
    <style jsx global>{`
      .content:nth-child(1) .under-content {
        display: flex;
        //   background-image: url(pictures/alice/background.svg);
        //   background-repeat: no-repeat;
      }
      .viewports {
        display: flex;
        justify-content: space-around;
        justify-items: center;
      }
      .viewports img {
        border-radius: 15px;
      }
      .responsive {
        max-width: 10vw;
      }
      .desktop {
        width: 42rem;
      }

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
      .under-content h2 {
        margin-bottom: 3rem;
      }
    `}</style>
  </Layout>
);

export default AlicePage;
