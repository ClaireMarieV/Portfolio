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

//Images
import logoAE from "../public/logos/logoDef.svg";
import blobImg from "../public/logos/blobGrey.svg";
import papillon from "../public/logos/papillon.svg";
import felicityImg from "../public/logos/felicity.svg";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content className="content">
      <h2>My works</h2>
      <div id="projects">
        <ArticleProject
          className="identity"
          title={identity.title}
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
          img={papillon}
        />
        <ArticleProject
          className="felicity"
          title={felicity.title}
          category="Wordpress"
          img={felicityImg}
        />
      </div>
    </Content>
    <style jsx global>{`
      #projects {
        display: flex;
        flex-direction: column;
        gap: 4rem;
      }

      #projects .article-project:nth-child(3n + 1) {
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
