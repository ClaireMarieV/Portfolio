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
      .sketch {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
      .under-content h2 {
        margin-bottom: 3rem;
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
    `}</style>
  </Layout>
);

export default BlogPage;
