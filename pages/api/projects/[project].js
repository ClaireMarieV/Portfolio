import projects from "../../../data/projects";

export default (req, res) => {
  res.statusCode = 200;
  res.json(projects[req.query.project]);
};
