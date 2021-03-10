const Title = ({ project }) => (
  <div>
    <h2>{project.title}</h2>
    <h3>{project.category}</h3>
    <style jsx>{`
      h2 {
        text-transform: uppercase;
      }
    `}</style>
  </div>
);

export default Title;
