import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/identity.js";

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
      .logo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        gap: 2rem;
      }
      .colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      }
      .colors .green {
        background: #b3d1c6;
      }
      .colors .black {
        background: #000000;
      }
      .colors .white-green {
        background: #eff5f3;
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
        line-height: 1.5;
      }
      .card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        gap: 2rem;
        background: #fffff;
      }
      .card img {
        box-shadow: 10px 7px 33px 2px #dddddd;
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
