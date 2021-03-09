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
import identity from "../data/2020/identity";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content className="content">
      <div className="title">
        <h2>My works</h2>
      </div>
      <div id="projects">
        <ArticleProject
          className="identity"
          title={identity.title}
          category="Graphic Design"
        />
        <ArticleProject
          className="blog"
          title={blog.title}
          category="ReactJs"
        />
        <ArticleProject
          className="blob"
          title={blob.title}
          category="ReactJs"
        />
        <ArticleProject
          className="felicity"
          title={felicity.title}
          category="Wordpress"
        />
        <ArticleProject
          className="alice"
          title={alice.title}
          category="UI/UX Design"
        />
      </div>
    </Content>
    <style jsx>{`
      #projects {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
      }
      .title {
        position: absolute;
        z-index: -1;
        margin: 0 auto;
        color: #e4eaf1;
      }
      .title h2 {
        font-size: 12rem;
      }
      @media (max-width: 850px) {
        #projects {
          grid-template-columns: 1fr 1fr;
        }
        .title h2 {
          font-size: 2rem;
        }
        .title {
          position: inherit;
          z-index: 0;
          margin: 0 auto;
          color: inherit;
        }
      }
      @media (max-width: 500px) {
        #projects {
          grid-template-columns: 1fr;
        }
        .title h2 {
          font-size: 2rem;
        }
        .title {
          position: inherit;
          z-index: 0;
          margin: 0 auto;
          color: inherit;
        }
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
