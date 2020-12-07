import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";
import Img from "../components/Img.js";
import Svg from "../components/Svg.js";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <Link href="/blog">
        <a>
          <Svg title="il était une fois" category="blog" />
        </a>
      </Link>
    </div>
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: 1fr;
        align-self: auto;
        justify-self: center;
        margin: 2rem;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
