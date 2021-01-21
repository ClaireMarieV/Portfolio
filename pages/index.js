import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import Content from "../components/Content.js";
import ContentFlex from "../components/ContentFlex.js";
import Icon from "../components/Icon.js";
import Img from "../components/Img.js";
import Move from "../components/Move.js";
import Picture from "../components/Picture.js";
import AnimatedWords from "../components/AnimatedWords";

import TranslateRight from "../components/TranslateRight.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Content>
      <AnimatedWords text="HELLO, I'M FREELANCE DEVELOPER"></AnimatedWords>
      <AnimatedWords text="AND UX/UI DESIGNER"></AnimatedWords>
      <div className="img">
        <img src="pictures/FaceTres.png" />
      </div>
      <ContentFlex>
        <div id="title">
          <h1>For several years, I love design.</h1>
          <h1>
            I like the design whether it is fashion, product, space or web.
          </h1>
        </div>
      </ContentFlex>
      <div className="content-button">
        <Move>
          <button>
            <span>Download my CV</span>
          </button>
        </Move>
      </div>
      <div className="h2">
        <h2>I choose front-development and UX/UI.</h2>
        <h2>Mix the both is to mix logic and creation.</h2>
      </div>
      <p>
        Few years ago, i did Mise à Niveau en Arts Appliqués. This year taught
        me the designer's methodology and the different processes. More than two
        years ago, i'm retraining in web development after learned Java alone.
      </p>
      <p>
        After traineeship where i worked with Symfony and first job in web
        development Fullstack, i learned React independently .
      </p>
    </Content>
    <style jsx>{`
      .content-grid:nth-child(1) {
        grid-gap: 5rem;
      }

      .img {
        width: 40vw;
        display: flex;
        margin: auto;
        margin-bottom: 4rem;
        margin-top: 4rem;
      }
      .content-button {
        justify-self: self-end;
      }
      h2 {
        margin-bottom: 5rem;
        font-weight: 600 !important;
      }
      #title {
        margin: 0 auto;
        width: 24vw;
      }

      @media (max-width: 700px) {
        .content-grid {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
