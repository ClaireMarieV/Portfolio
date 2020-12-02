import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";
import TranslateRepeat from "../components/TranslateRepeat.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Picture picture="svg/title.svg" />
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
