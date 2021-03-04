//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Viewports from "../../components/Viewports";
import Parallax from "../../components/Parallax";
import Picture from "../../components/Picture";

//Images
import pivoine from "../../public/logos/pivoine.svg";
import blogDesktop from "../../public/pictures/blog/blogDesktop.png";
import wireframe from "../../public/pictures/blog/wireframe.svg";

export default {
  title: "Il etait une fois",
  category: "ReactJs",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Parallax>
            <h2>About the project</h2>
          </Parallax>
          <p>
            "Il était une fois" is a blog originally created as a final project
            of end intensive training . It was written in PHP then I wanted to
            write it later to learn ReactJs.
          </p>
          <Picture title="Wireframe Index" picture={{ picture: wireframe }} />
        </div>

        <div className="under-content">
          <Parallax>
            <h2>Typography</h2>
          </Parallax>
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
        <div className="under-content">
          <h2>Colors</h2>
          <div className="colors">
            <Color className="grey" hex="#262525" />
            <Color className="salmon" hex="#f7c289" />
            <Color className="white-pink" hex="#ece0d5" />
          </div>
        </div>
        <div className="final">
          <Picture title="Final" picture={{ picture: blogDesktop }} />
          <a href="https://ilétaitunefois.fr/" target="_blank">
            <h3>View Website</h3>
          </a>
        </div>
      </Content>
    </>
  ),
};
