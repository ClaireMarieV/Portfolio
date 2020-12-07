import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";
import TranslateRight from "../components/TranslateRight.js";
import Icon from "../components/Icon.js";
import AnimatedText from "../components/AnimatedText.js";
import AnimatedLetterBottom from "../components/AnimatedLetterBottom.js";
import AnimatedLetterMiddle from "../components/AnimatedLetterMiddle.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="index">
      <section className="title">
        <h1>PORTFOLIO</h1>
      </section>
    </div>
    <style jsx>{`
      #index {
        display: grid;
        grid-template-columns: 1fr;
        justify-self: center;
        margin: 2rem;
      }
      h1 {
        display: flex;
      }
      section {
        display: flex;
        justify-content: center;
        // width: 100vw;
        // height: 100vh;
      }
      #icons {
        display: flex;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
