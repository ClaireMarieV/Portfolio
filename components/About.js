const About = ({ project }) => (
  <div className="about">
    <p>{project.about}</p>
    <style jsx>{`
      .about {
        width: 90%;
        justify-self: center;
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
