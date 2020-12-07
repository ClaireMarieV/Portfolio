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
      <Svg title="il était une fois" category="blog" />

      <Svg title="haute couture" category="pantone" />

      <Svg
        title="childhood to young adults"
        category="Psychologue&Psychothérapeute"
      />
    </div>
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-self: auto;
        justify-self: center;
        margin: 2rem;
      }
    `}</style>
  </Layout>
);
export default ProjectsPage;
