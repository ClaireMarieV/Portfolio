import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="content">
      <Picture picture="projects.svg" />

      <div className="img">
        <Picture picture="pictures/arrow.svg" />
      </div>
      <div>
        <p></p>
      </div>
    </div>
    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        margin: 2rem;
      }
      .name {
        justify-self: center;
      }
      .skills {
      }
    `}</style>
  </Layout>
);
export default IndexPage;
