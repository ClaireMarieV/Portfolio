/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Head from "next/head";

function SEO({ title }) {
  return (
    <Head
      htmlAttributes={{
        lang: "fr",
      }}
      title={title}
    />
  );
}

export default SEO;
