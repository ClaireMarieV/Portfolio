export const fromProject = (project) =>
  "/projects/" +
  project.title.toLowerCase().split(" ").join("_").split("'").join("_");

export const toProject = (projects, url) => {
  const [title] = url.split("-");
  return projects[title].find(
    (project) =>
      project.title.toLowerCase().split(" ").join("_").split("'").join("_") ===
      title
  );
};

export const fromLogo = (logo) =>
  "/logos/" +
  logo.title.toLowerCase().split(" ").join("_").split("'").join("_");

export const toLogo = (logos, url) => {
  const [title] = url.split("-");
  return logos[title].find(
    (logo) =>
      logo.title.toLowerCase().split(" ").join("_").split("'").join("_") ===
      title
  );
};
