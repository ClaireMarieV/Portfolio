import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import AnimatedWords from "../components/AnimatedWords";
import Content from "../components/Content";
import ContentFlex from "../components/ContentFlex";
import Icon from "../components/Icon";
import Img from "../components/Img";
import Move from "../components/Move";
import Picture from "../components/Picture";
import Svg from "../components/Svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <div>
        <AnimatedWords text="HELLO,"></AnimatedWords>
        <AnimatedWords text="I'M FREELANCE DEVELOPER"></AnimatedWords>
        <AnimatedWords text="AND UX/UI DESIGNER"></AnimatedWords>
      </div>
      <Move>
        <div className="img">
          <img src="pictures/FaceTres.png" />
        </div>
      </Move>

      <ContentFlex>
        <div id="title">
          <h2>
            For several years, I love design whether it's fashion, product or
            web.
          </h2>
          <h2>
            Creating, modeling and composing a design that will convey an
            emotion.Living in Nancy, France; I'll glad to tell you more.
          </h2>
        </div>
      </ContentFlex>
      <div className="content-button">
        <Move>
          <a download="CVclaireMarieVaney" href="CV02.2021.pdf">
            <button>
              <span>Download my CV</span>
            </button>
          </a>
        </Move>
      </div>
      <div className="titles">
        <h2>I choose front-development and UX/UI.</h2>
        <h2>Mix the both is to mix logic and creation.</h2>
        <h1>LESS IS MORE, MAKE IT SIMPLE</h1>
      </div>
      <Svg />
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
      .content-button span {
        font-weight: 600;
      }
      .img {
        width: 40vw;
        display: flex;
        margin: auto;
        margin-bottom: 4rem;
        margin-top: 4rem;
        transform: matrix(1, 0, 0, 1, 0);
        will-change: transform;
      }

      .content-button {
        justify-self: self-end;
      }
      h2 {
        margin-bottom: 5rem;
      }
      h2 {
        letter-spacing: 0.05em;
        transform: translate3d(0, 0, 0);
        transition: transform 0.5s;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      h2::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 55%;
        height: 0.8rem;
        left: 0.05em;
        top: 1.25em;
        background: #eff2f5;
        transform: scale3d(1, 1, 1);
        transform-origin: 100% 50%;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .titles h2 {
        font-weight: 700;
      }
      #title {
        margin: 0 auto;
        width: 24vw;
        text-transform: uppercase;
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
