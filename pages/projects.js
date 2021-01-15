import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleProject from "../components/ArticleProject";
import blog from "../data/2020/blog";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <h1>Projects</h1>
      <div id="span">
        <ArticleProject title={blog.title} />
        <span>Pantone et la Haute couture</span>
        <span>Organic blob</span>
        <span>Kiru</span>
        <span>Children to young Adults</span>
      </div>
    </div>
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-self: auto;
        justify-self: center;
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
