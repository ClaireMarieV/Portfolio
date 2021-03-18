import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleProject from "../components/ArticleProject";
import Content from "../components/Content";
import ArticleLogo from "../components/ArticleLogo";
import Mail from "../components/Mail";

//Articles
import blog from "../data/2020/blog";
import blob from "../data/2020/blob";
import alice from "../data/2020/alice";
import felicity from "../data/2021/felicity";
import identity from "../data/2020/identity";

const ProjectsPage = () => (
  <Layout>
    <Content className="content">
      <div className="listing-projects-title">
        <h1>Selected works</h1>
        <span>from 2020 to 2021</span>
      </div>
      <div id="projects">
        <ArticleLogo
          className="identity"
          title={identity.title}
          category="Graphic Design"
          year="2019"
        />
        <ArticleProject
          className="blog"
          title={blog.title}
          category="ReactJs"
          year="2020"
        />
        <ArticleProject
          className="blob"
          title={blob.title}
          category="ReactJs"
          year="2020"
        />
        <ArticleProject
          className="felicity"
          title={felicity.title}
          category="Wordpress"
          year="2021"
        />
        <ArticleProject
          className="alice"
          title={alice.title}
          category="UI/UX Design"
          year="2020"
        />
      </div>
      <Mail />
    </Content>
    <style jsx global>{`
      #projects {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 3rem;
      }

      #projects:nth-child(1n + 2) {
        align-self: end;
      }

      .listing-projects-title h1 {
        text-transform: uppercase;
        font-size: 3rem;
      }
      .listing-projects-title {
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 850px) {
        #projects {
          grid-template-columns: 1fr 1fr;
        }
        .listing-projects-title h2 {
          font-size: 4.5rem;
        }
        .listing-projects-title {
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
        .listing-projects-title h2 {
          font-size: 2rem;
        }
        .listing-projects-title {
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
