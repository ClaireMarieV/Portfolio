import projects from "../../../data/logos";

export default (req, res) => {
  res.statusCode = 200;
  res.json(projects[req.query.logo]);
};
