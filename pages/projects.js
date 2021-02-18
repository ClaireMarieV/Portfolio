import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import ArticleProject from "../components/ArticleProject";
import Content from "../components/Content";
import Svg from "../components/Svg";

//Articles
import blog from "../data/2020/blog";
import blob from "../data/2020/blob";
import alice from "../data/2020/alice";
import felicity from "../data/2021/felicity";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content className="content">
      <div id="span">
        <ArticleProject className="blog" title={blog.title} category="BLOG" />
        <Svg />
        <ArticleProject className="blob" title={blob.title} category="DESIGN" />
        <Svg />
        <span>Kiru</span>
        <Svg />

        <ArticleProject
          className="alice"
          title={alice.title}
          category="PSYCHOLOGY"
        />
        <ArticleProject
          className="felicity"
          title={felicity.title}
          category="PODCAST"
        />
      </div>
    </Content>
    <style jsx global>{`
      #span {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        justify-items: center;
        gap: 9rem;
      }
      .article-project-blog {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
      }
      .article-project-blob {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 2;
      }
      .article-project-alice {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 3;
      }
      .article-project-felicity {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 4;
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
