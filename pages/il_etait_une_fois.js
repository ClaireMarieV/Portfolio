import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/blog.js";

const BlogPage = () => (
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
      // #font .content-font:nth-child(2) > span {
      //   font-family: arboria, sans-serif !important;
      // }
      #colors {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      .colors:nth-child(1) .color {
        background: #262525;
      }
      .colors:nth-child(2) .color {
        background: #f7c289;
      }
      .colors:nth-child(3) .color {
        background: #ece0d5;
      }
    `}</style>
  </Layout>
);

export default BlogPage;
