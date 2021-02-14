import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import ArticleProject from "../components/ArticleProject";
import ContentFlex from "../components/ContentFlex";
import blog from "../data/2020/blog";
import blob from "../data/2020/blob";
const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentFlex className="content">
      <h1>Projects</h1>
      <div id="span">
        <ArticleProject title={blog.title} />
        <ArticleProject title={blob.title} />
        <span>Kiru</span>
        <span>Children to young Adults</span>
        <span>FelicityLab</span>
      </div>
    </ContentFlex>
    <style jsx>{`
      .content {
        justify-items: center;
        flex-direction: row;
        gap: 2rem;
      }
      h1 {
        justify-self: center;
      }
      #span {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      #span span {
        font-size: 2rem;
        padding: 1rem;
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
