const LogoGrid = ({ project, alt }) => (
  <section>
    <h4>Final logo</h4>
    <div className="logo">
      <img src={project.logo} alt="logo" />
      <img
        src={project.logoBackgroundColor}
        alt="logo contour blanc fond de couleur"
      />
      <img src={project.logoWhite} alt="logo noir fond blanc" />
      <img src={project.logoBlack} alt="logo blanc fond noir" />
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
