import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import ArticleProject from "../components/ArticleProject";
import Content from "../components/Content";
import blog from "../data/2020/blog";
import blob from "../data/2020/blob";
import alice from "../data/2020/alice";
import felicity from "../data/2021/felicity";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content className="content">
      <div id="span">
        <ArticleProject title={blog.title} />
        <ArticleProject title={blob.title} />
        <span>Kiru</span>
        <ArticleProject title={alice.title} />
        <ArticleProject title={felicity.title} />
      </div>
    </Content>
    <style jsx>{`
      #span {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 10rem;
        justify-items: center;
      }
      #span span {
        margin: auto;
        font-size: 2rem;
        padding: 1rem;
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
