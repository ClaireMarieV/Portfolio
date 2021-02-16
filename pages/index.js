import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import AnimatedWords from "../components/AnimatedWords";
import Content from "../components/Content";
import ContentGrid from "../components/ContentGrid";
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

      <ContentGrid>
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
        <div className="content-button">
          <Move>
            <a download="CVclaireMarieVaney" href="CV02.2021.pdf">
              <button>
                <span>Download my CV</span>
              </button>
            </a>
          </Move>
        </div>
      </ContentGrid>
      <Svg />
      <div className="titles">
        <div>
          <h1>LESS IS MORE, MAKE IT SIMPLE</h1>
        </div>
        <div>
          <h2>I choose front-development and UX/UI.</h2>
          <h2>Mix the both is to mix logic and creation.</h2>
        </div>
      </div>
    </Content>

    <style jsx>{`
      .content-grid:nth-child(1) {
        grid-gap: 5rem;
      }
      .content-button {
        justify-self: self-end;
        align-self: end;
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
      .titles {
        display: grid;
        grid-template-columns: 1fr 500px;
        grid-gap: 2rem;
      }
      .titles h2 {
        font-weight: 700;
      }
      #title {
        margin: 0 auto;
        width: 24vw;
        text-transform: uppercase;
      }

      @media (max-width: 800px) {
        .content-grid {
          grid-template-columns: auto;
        }
        #title {
          width: 100%;
        }
      }
      @media (max-width: 500px) {
        .img {
          width: 100%;
          margin: 0;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
