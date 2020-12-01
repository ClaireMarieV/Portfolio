import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="name"></div>
      <div className="img">
        <Picture picture="pictures/arrow.svg" />
      </div>

      <Picture picture="" />
    </div>
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        margin: 2rem;
      }
      .name {
        justify-self: center;
      }
      .img {
        width: 20rem;
      }
      h2 {
        align-self: center;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
