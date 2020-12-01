import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="title">
        <h2>Hello, I'm Claire Marie Vaney</h2>
        <h1>THIS IS MY PORTFOLIO</h1>
      </div>
      <div className="month">
        <h3>November 2020</h3>
      </div>
    </div>

    <style jsx>{`
      .container {
        display: grid;
        justify-self: center;
        margin: 2rem;
        // grid-template-columns: repeat(2, minmax(0, 1fr));
        // grid-template-rows: repeat(2, minmax(0, 1fr));
      }
      .title {
        justify-self: center;
        align-self: center;
      }
      .month {
        display: flex;
        justify-content: flex-end;
        height: 10rem;
        align-items: flex-end;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
