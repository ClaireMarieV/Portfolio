import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";
import Img from "../components/Img.js";
import Svg from "../components/Svg.js";
import Stain from "../components/Stain.js";
import StainPink from "../components/StainPink.js";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <h1>Projects</h1>
      <div id="span">
        <span>Il était une fois </span>
        <span>Pantone et la Haute couture</span>
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
