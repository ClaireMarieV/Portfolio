export const fromArticle = (article) =>
  article.title.toLowerCase().split(" ").join("_").split("'").join("_");

export const toArticle = (articles, url) => {
  const [title] = url.split("-");
  return articles[title].find(
    (article) =>
      article.title.toLowerCase().split(" ").join("_").split("'").join("_") ===
      title
  );
};
