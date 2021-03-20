import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleProject from "../components/ArticleProject";
import OneColumn from "../components/OneColumn";
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
    <OneColumn className="content">
      <div className="projects-title">
        <h1>Selected works</h1>
        <span>from 2020 to 2021</span>
        <div>
          <h2>Graphic and Interface design, user experience & </h2>
          <h2>Front-end development</h2>
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
    </OneColumn>
    <style jsx global>{`
      .listing-projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: column;
        grid-template-rows: auto;
        gap: 8rem;
        justify-self: center;
        justify-items: center;
      }

      .projects-title h1 {
        text-transform: uppercase;
        font-size: 4rem;
      }
      .projects-title {
        display: flex;
        flex-direction: column;
      }
      .projects-title > div {
        display: flex;
        flex-direction: column;
      }
      .sentences {
        justify-self: end;
      }
      @media (max-width: 850px) {
        .listing-projects {
          grid-template-columns: 1fr 1fr;
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
        .projects-title h1 {
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
