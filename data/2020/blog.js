//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Viewports from "../../components/Viewports";
import Parallax from "../../components/Parallax";
import Picture from "../../components/Picture";
import UnderContent from "../../components/UnderContent";

//Images
import blogDesktop from "../../public/pictures/blog/blogDesktop.png";
import wireframe from "../../public/pictures/blog/wireframe.png";
import rustique from "../../public/pictures/blog/rustique4.png";

export default {
  title: "Il etait une fois",
  category: "ReactJs",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Picture
            title="Concept final/index"
            picture={{ picture: wireframe }}
          />
          <Picture title="HomePage" picture={{ picture: blogDesktop }} />
        </div>
        <div>
          <h2>About the project</h2>
          <p>
            "Il était une fois" is a blog originally created as a final project
            of end intensive training . It was written in PHP then I wanted to
            write it later to learn ReactJs.
          </p>
        </div>
        <div>
          <h2>Typography</h2>
          <Fonts
            fonts={[
              {
                family: "Gravesend, sans-serif",
                weight: "Bold",
                label: "Primary",
              },
              {
                family: "Arboria, sans-serif",
                weight: "Regular",
                label: "Secondary",
              },
            ]}
          />
        </div>
        <div>
          <h2>Colors</h2>
          <div className="colors">
            <Color className="grey" hex="#262525" />
            <Color className="salmon" hex="#f7c289" />
            <Color className="white-pink" hex="#ece0d5" />
          </div>
        </div>
        <div className="final">
          <a href="https://ilétaitunefois.fr/" target="_blank">
            <h3>View Website</h3>
          </a>
        </div>
      </Content>
    </>
  ),
};
