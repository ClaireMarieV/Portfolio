import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useRouter } from "next/router";
import { toArticle } from "../lib/link";

const ArticlePage = () => {
  const router = useRouter();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (router.query.article) {
      setArticle(toArticle(articles, router.query.article));
    }
  }, [router]);

  return (
    <Layout>
      <SEO title="Home" />

      <style jsx>{``}</style>
    </Layout>
  );
};

export default ArticlePage;
