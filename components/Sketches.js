import BottomTranslate from "./BottomTranslate";

const Sketches = ({ project }) => (
  <>
    <section className="sketches">
      <BottomTranslate>
        <img src={project.sketches} alt="croquis logo" />
      </BottomTranslate>
    </section>
  </>
);
export default Sketches;
