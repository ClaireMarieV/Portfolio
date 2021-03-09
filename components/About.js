const About = ({ project }) => (
  <div className="about">
    <h4>About the project</h4>
    <p>{project.about}</p>
    <style jsx>{`
      .about {
        width: 35vw;
      }
    `}</style>
  </div>
);

export default About;
