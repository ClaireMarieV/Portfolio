const About = ({ project }) => (
  <div className="about">
    <h4>About the project</h4>
    <p>{project.about}</p>
    <style jsx>{`
      .about {
        width: 60%;
      }
      @media (max-width: 700px) {
        .about {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default About;
