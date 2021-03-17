const SocialCard = ({ project, alt }) => (
  <>
    <h4>Social</h4>
    <div className="card">
      <img src={project.frontCard} alt="social card recto" />
      <img src={project.backCard} alt="social card verso" />
    </div>
    <style jsx>{`
      .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    `}</style>
  </>
);
export default SocialCard;
