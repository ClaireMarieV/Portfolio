export const fromArticle = (article) =>
  article.category.toLowerCase().split(" ").join("_").split("'").join("_") +
  "-" +
  article.title.toLowerCase().split(" ").join("_").split("'").join("_");

export const toArticle = (articles, url) => {
  const [category, title] = url.split("-");
  return articles[category].find(
    (article) =>
      article.title.toLowerCase().split(" ").join("_").split("'").join("_") ===
      title
  );
};
