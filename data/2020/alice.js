//Components
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Picture from "../../components/Picture";
import Parallax from "../../components/Parallax";

//Images
import desktopPreview from "../../public/pictures/alice/alice.png?lqip";
import desktop from "../../public/pictures/alice/alice.png?resize&sizes[]=200&sizes[]=600";
import wireframe from "../../public/pictures/alice/wireframe.svg";

export default {
  title: "Children to young adults",
  category: "UI/UX Design",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Parallax>
            <h2>About the project</h2>
          </Parallax>

          <p>
            Cette page accompagne le profil Doctolib d'une psychologue
            spécialisée de l'enfance aux jeunes adultes.
          </p>
          <div className="pictures">
            <Picture title="Wireframe" picture={{ picture: wireframe }} />
            <Picture
              title="Final"
              picture={{ preview: desktopPreview, picture: desktop }}
            />
          </div>
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Typography</h2>
          </Parallax>

          <Fonts
            fonts={[
              {
                family: "Professor,sans-serif",
                weight: "Regular",
                label: "Primary",
              },
              {
                family: "Acumin-pro,sans-serif",
                weight: "Bold",
                label: "Secondary",
              },
              {
                family: "Graphie,sans-serif",
                weight: "Regular",
                label: "Tertiary",
              },
            ]}
          />
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Colors</h2>
          </Parallax>

          <div className="colors">
            <Color className="blue" hex="#a9c1ed" />
            <Color className="neutral" hex="#ffe1d1" />
            <Color className="white" hex="#ffffff" />
          </div>
        </div>
      </Content>
    </>
  ),
};
