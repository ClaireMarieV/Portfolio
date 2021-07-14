import PerspectivePicture from "./PerspectivePicture";

const SocialCard = ({ project, alt }) => (
  <section>
    <h4>Social</h4>
    <div className="card">
      <img src={project.frontCard} alt="social card recto" />
      <img src={project.backCard} alt="social card verso" />{" "}
    </div>
    <style jsx>{`
      .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      .card img {
        box-shadow: 10px 16px 10px rgb(0 0 0 / 3%);
      }
      @media (max-width: 500px) {
        .card {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);
export default SocialCard;
