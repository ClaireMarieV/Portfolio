//Components
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Picture from "../../components/Picture";
import Parallax from "../../components/Parallax";

//Images
import desktopPreview from "../../public/pictures/alice/alice.png?lqip";
import desktop from "../../public/pictures/alice/alice.png?resize&sizes[]=200&sizes[]=600";
import wireframe from "../../public/pictures/alice/wireframe.png";

export default {
  title: "Children to young adults",
  category: "UI/UX Design",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Picture title="Concept final" picture={{ picture: wireframe }} />
          <Picture
            title="HomePage"
            picture={{ preview: desktopPreview, picture: desktop }}
          />
        </div>
        <div>
          <h2>About the project</h2>
          <p>
            This page go with the Doctolib profile of a psychologist specialized
            from childen to young adults.
          </p>
        </div>
        <div>
          <h2>Typography</h2>
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
        <div>
          <h2>Colors</h2>
          <div className="colors">
            <Color className="blue" hex="#a9c1ed" />
            <Color className="neutral" hex="#ffe1d1" />
            <Color className="white" hex="#ffffff" />
          </div>
        </div>
        <div className="final">
          <a href="https://psychologue-alicefelt.fr/" target="_blank">
            <h3>View Website</h3>
          </a>
        </div>
      </Content>
    </>
  ),
};
