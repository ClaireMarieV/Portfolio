import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Article from "../components/Article.js";
import article from "../data/2020/blog.js";

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />
    <Article title={article.title}>{article.content}</Article>
    <style jsx global>{`
      .content {
        display: flex;
        padding: 2rem;
      }

      .colors {
        display: flex;
        padding: 3rem;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        justify-self: center;
      }
      .content .colors #line {
        letter-spacing: 0.05em;
        transform: translate3d(-0.5em, 0, 0);
        transition: transform 0.5s;
        // transform: scale3d(0, 1, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      .content .colors #line::before {
        content: "";
        position: absolute;
        z-index: -2;
        width: 100%;
        height: 2rem;
        left: 0.05em;
        top: 6.25em;
        background: #999a9d;
        transform: scale3d(1, 1, 1);
        transform-origin: 100% 50%;
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      }
      #fonts-content {
        width: 100%;
        padding: 3rem;
      }
      #fonts-content #font-content:nth-child(2) #font h2,
      #fonts-content #font-content:nth-child(2) #font span,
      #fonts-content #font-content:nth-child(2) p {
        font-family: gravesend, sans-serif !important;
      }
      #fonts-content #font-content:nth-child(3) #font h2,
      #fonts-content #font-content:nth-child(3) #font span,
      #fonts-content #font-content:nth-child(3) p {
        font-family: arboria, sans-serif !important;
      }
      #fonts-content #font-content:nth-child(4) #font h2,
      #fonts-content #font-content:nth-child(4) #font span,
      #fonts-content #font-content:nth-child(4) p {
        font-family: raleway, sans-serif !important;
      }

      .content:nth-child(3) #wireframes {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 3rem;
        margin: 2rem;
      }
      .dot-angle {
        display: flex;
      }
    `}</style>
  </Layout>
);

export default BlogPage;
