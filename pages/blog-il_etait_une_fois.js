import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import article from "../data/2020/blog";

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />

    <style jsx global>{`
      .article-base .text {
        display: flex;
        max-width: 30rem;
        margin: auto;
      }
    `}</style>
  </Layout>
);

export default BlogPage;
