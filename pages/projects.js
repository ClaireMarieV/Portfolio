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

//Images
import logoAE from "../public/logos/logoDef.svg";
import blobImg from "../public/logos/blobGrey.svg";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content className="content">
      <h2>My projects</h2>
      <div id="projects">
        <ArticleProject
          className="identity"
          title={blog.title}
          category="Graphic Design"
          img={logoAE}
        />
        <ArticleProject
          className="blog"
          title={blog.title}
          category="ReactJs"
          img={logoAE}
        />
        <ArticleProject
          className="blob"
          title={blob.title}
          category="ReactJs"
          img={blobImg}
        />
        <ArticleProject
          className="alice"
          title={alice.title}
          category="UI/UX Design"
        />
        <ArticleProject
          className="felicity"
          title={felicity.title}
          category="Wordpress"
        />
      </div>
    </Content>
    <style jsx global>{`
      #projects {
        display: flex;
        flex-direction: column;
      }

      #projects .article-project:nth-child(2n + 1) {
        flex-direction: row-reverse;
      }

      @media (max-width: 700px) {
        #project {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
