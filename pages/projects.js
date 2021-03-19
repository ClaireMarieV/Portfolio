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
      <div className="projects-title">
        <h1>Selected works</h1>
        <span>from 2020 to 2021</span>
        <div>
          <h2>Interface Design, XP user & </h2>
          <h2>front-end development</h2>
          <span>Logotypes </span>
        </div>
      </div>
      <div className="listing-projects">
        <ArticleLogo
          className="identity"
          title={identity.title}
          category="Graphic Design"
          year="2020"
        />
        <ArticleProject
          className="blog"
          title={blog.title}
          category="ReactJs, UX/UI Design & Illustration"
          year="2020"
        />
        <ArticleProject
          className="blob"
          title={blob.title}
          category="Development & UX/UI Design"
          year="2020"
        />
        <ArticleProject
          className="felicity"
          title={felicity.title}
          category="Development, UX/UI Design & Logotypes"
          year="2021"
        />
        <ArticleProject
          className="alice"
          title={alice.title}
          category="UI/UX Design"
          year="2020"
        />
      </div>
      <Mail className="mail" />
    </Content>
    <style jsx global>{`
      .listing-projects {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 3rem;
        width: 90%;
        align-self: center;
      }
      .article-project:nth-child(even) {
        align-items: flex-end;
        // flex-direction: row-reverse;
      }

      .projects-title h1 {
        text-transform: uppercase;
        font-size: 3rem;
      }
      .projects-title {
        display: flex;
        flex-direction: column;
      }
      .projects-title > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-transform: uppercase;
      }
      @media (max-width: 850px) {
        .listing-projects {
          grid-template-columns: 1fr 1fr;
        }
        .projects-title h2 {
          font-size: 4.5rem;
        }
        .projects-title {
          position: inherit;
          z-index: 0;
          margin: 0 auto;
          color: inherit;
        }
      }
      @media (max-width: 500px) {
        .listing-projects {
          grid-template-columns: 1fr;
        }
        .projects-title h2 {
          font-size: 2rem;
        }
        .projects-title {
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
