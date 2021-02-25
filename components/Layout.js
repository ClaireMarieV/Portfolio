import React from "react";

import Header from "./Header";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <link rel="stylesheet" href="https://use.typekit.net/tpi2jhe.css"></link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      <main>{children}</main>
    </div>
    <style jsx global>
      {`
        html {
          overflow: hidden;
          height: 100%;
        }
        main {
          height: 100vh;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          color: #eff0f5;
        }
        body {
          height: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 100%;
          color: #1d201f;
          background-color: #f2f4f8;
          font-family: proxima-nova, sans-serif;
          margin: 0;
          overscroll-behavior: none;
          perspective: 1px;
          transform-style: preserve-3d;
        }
        ::-webkit-scrollbar {
          scrollbar-width: 5px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: rgba(79, 71, 78, 0.8);
        }

        img {
          overflow: hidden;
          border: 0;
          width: 100%;
        }
        a {
          text-decoration: none;
        }
        h1 {
          font-family: neue-haas-grotesk-display, sans-serif;
          margin: 0;
          font-weight: 400;
          font-style: normal;
          font-size: 5rem;
        }
        h2,
        h3,
        h4 {
          font-family: graphie, sans-serif;
          font-style: normal;
        }
        h2 {
          font-weight: 300;
          margin-bottom: 0.5rem;
          font-size: 2rem;
          margin: 0;
        }

        h3 {
          color: #dbc4bc;
          // font-weight: 800;
          padding: 1rem;
          margin: 0;
        }

        h4 {
          font-weight: 500;
          font-size: 1rem;
        }

        p {
          font-weight: 300;
          font-size: 1.5rem;
          text-align: justify;
          line-height: 2rem;
        }
        ul {
          list-style: none;
          padding: 0;
          font-weight: 800;
        }
        span {
          font-family: graphie, sans-serif;
        }
        button {
          font-size: 1.3rem;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          padding: 1.5rem;
          border: 2px solid #d1d8e7;
          background-color: transparent;
          letter-spacing: 0.1rem;
          margin: 0;
          color: #1d201f;
          justify-self: right;
          transition: all 0.3s ease;
        }
        button:hover {
          transform: rotate(15deg);
          transition: all 0.3s ease;
        }
      `}
    </style>
    <style jsx>{`
      a {
        background-color: transparent;
      }

      body {
        color: hsla(0, 0%, 0%, 0.8);
        font-family: kumlien-pro, serif;
        font-weight: 400;
        font-style: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: "kern", "liga", "clig", "calt";
        -ms-font-feature-settings: "kern", "liga", "clig", "calt";
        -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
        font-feature-settings: "kern", "liga", "clig", "calt";
        position: absolute;
        top: 20px;
        left: 20px;
        bottom: 20px;
        right: 20px;
        padding: 30px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
      }
      h1 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 2.25rem;
        line-height: 1.1;
      }
      h2 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.62671rem;
        line-height: 1.1;
      }
      h3 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.38316rem;
        line-height: 1.1;
      }
      h4 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        line-height: 1.1;
      }
      h6 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 0.78405rem;
        line-height: 1.1;
      }
      hgroup {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      ul {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }
      ol {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
      }
      dl {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      dd {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      figure {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      pre {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 1.45rem;
        font-size: 0.85rem;
        line-height: 1.42;
        background: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding: 1.45rem;
      }
      table {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        font-size: 1rem;
        line-height: 1.45rem;
        border-collapse: collapse;
        width: 100%;
      }
      fieldset {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      blockquote {
        margin-left: 1.45rem;
        margin-right: 1.45rem;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      form {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      noscript {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      iframe {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.45rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
      }
      address {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
      }
      b {
        font-weight: bold;
      }
      strong {
        font-weight: bold;
      }
      dt {
        font-weight: bold;
      }
      th {
        font-weight: bold;
      }
      li {
        margin-bottom: calc(1.45rem / 2);
      }
      ol li {
        padding-left: 0;
      }
      ul li {
        padding-left: 0;
      }
      li > ol {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }
      li > ul {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }
      blockquote *:last-child {
        margin-bottom: 0;
      }
      li *:last-child {
        margin-bottom: 0;
      }
      p *:last-child {
        margin-bottom: 0;
      }
      li > p {
        margin-bottom: calc(1.45rem / 2);
      }
      code {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      kbd {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      samp {
        font-size: 0.85rem;
        line-height: 1.45rem;
      }
      abbr {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }
      acronym {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
      }
      abbr[title] {
        border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
        cursor: help;
        text-decoration: none;
      }
      thead {
        text-align: left;
      }
      td,
      th {
        text-align: left;
        border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
        font-feature-settings: "tnum";
        -moz-font-feature-settings: "tnum";
        -ms-font-feature-settings: "tnum";
        -webkit-font-feature-settings: "tnum";
        padding-left: 0.96667rem;
        padding-right: 0.96667rem;
        padding-top: 0.725rem;
        padding-bottom: calc(0.725rem - 1px);
      }
      th:first-child,
      td:first-child {
        padding-left: 0;
      }
      th:last-child,
      td:last-child {
        padding-right: 0;
      }
      tt,
      code {
        background-color: hsla(0, 0%, 0%, 0.04);
        border-radius: 3px;
        font-family: "SFMono-Regular", Consolas, "Roboto Mono",
          "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;
        padding: 0;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
      }
      pre code {
        background: none;
        line-height: 1.42;
      }
      code:before,
      code:after,
      tt:before,
      tt:after {
        letter-spacing: -0.2em;
        content: " ";
      }
      pre code:before,
      pre code:after,
      pre tt:before,
      pre tt:after {
        content: "";
      }
      @media only screen and (max-width: 480px) {
        html {
          font-size: 100%;
        }
      }
    `}</style>
  </div>
);

export default Layout;
