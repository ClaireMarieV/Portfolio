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
      .under-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
      }
      .under-content h3 {
        width: 26rem;
        padding: 2rem;
        margin: 0 auto;
        line-height: 1.5;
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
        .pictures {
          grid-template-columns: auto;
          justify-items: center;
        }
      }
    `}</style>
  </Layout>
);

export default AlicePage;
