import PerspectivePicture from "./PerspectivePicture";

const LogoGrid = ({ project, alt }) => (
  <section>
    <h4>Final logo</h4>
    <div className="logo">
      <PerspectivePicture>
        <img src={project.logo} alt="logo" />{" "}
      </PerspectivePicture>
      <PerspectivePicture>
        <img
          src={project.logoBackgroundColor}
          alt="logo contour blanc fond de couleur"
        />
      </PerspectivePicture>
      <PerspectivePicture>
        <img src={project.logoWhite} alt="logo noir fond blanc" />
      </PerspectivePicture>
      <PerspectivePicture>
        <img src={project.logoBlack} alt="logo blanc fond noir" />{" "}
      </PerspectivePicture>
    </div>
    <style jsx>{`
      .logo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      @media (max-width: 500px) {
        .logo {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);
export default LogoGrid;
