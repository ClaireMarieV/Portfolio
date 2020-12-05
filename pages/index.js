import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Picture from "../components/Picture.js";
import TranslateRepeat from "../components/TranslateRepeat.js";
import Icon from "../components/Icon.js";
import AnimatedText from "../components/AnimatedText.js";
import AnimatedLetterBottom from "../components/AnimatedLetterBottom.js";
import AnimatedLetterMiddle from "../components/AnimatedLetterMiddle.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="index">
      <section className="title">
        <h1>
          <AnimatedText letter="P" />
          <AnimatedLetterMiddle letter="O" />
          <AnimatedLetterBottom letter="R" />
          <AnimatedText letter="T" />
          <AnimatedLetterMiddle letter="F" />
          <AnimatedLetterBottom letter="O" />
          <AnimatedText letter="L" />
          <AnimatedLetterMiddle letter="I" />
          <AnimatedLetterBottom letter="O" />
        </h1>
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
        width: 100vw;
        height: 100vh;
      }
      #icons {
        display: flex;
      }
    `}</style>
  </Layout>
);
export default IndexPage;
