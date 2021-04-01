import BottomTranslate from "./BottomTranslate";

const Pattern = ({ project, alt }) => (
  <section>
    <h4>Pattern</h4>
    <BottomTranslate>
      <img src={project.pattern} alt="pattern" />
    </BottomTranslate>
  </section>
);
export default Pattern;
