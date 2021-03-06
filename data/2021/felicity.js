import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Picture from "../../components/Picture";
import Parallax from "../../components/Parallax";

import felicity from "../../public/logos/felicity.svg";
import wireframe from "../../public/pictures/felicity/felicity.png";
import index from "../../public/pictures/felicity/index.png";

export default {
  title: "FelicityLab",
  category: "Wordpress",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Picture
            title="Concept final/Index"
            picture={{ picture: wireframe }}
          />
          <Picture
            title="Pré-production HomePage"
            picture={{ picture: index }}
          />
        </div>
        <div>
          <h2>About the project</h2>
          <p>
            Felicity is a simple blog wich introduce and go with podcast
            platform. I created a Wordpress theme.
          </p>
        </div>
        <div>
          <h2>Typography</h2>
          <Fonts
            fonts={[
              {
                family: "Bodoni-urw, serif;",
                weight: "Regular",
                label: "Primary",
              },
              {
                family: "Graphie,sans-serif",
                weight: "Bold",
                label: "Secondary",
              },
              {
                family: "Open-sans,sans-serif",
                weight: "Regular",
                label: "Tertiary",
              },
            ]}
          />
        </div>
        <div>
          <h2>Colors</h2>
          <div className="colors">
            <Color className="dark-blue" hex="#1e1d28" />
            <Color className="yellow" hex="#fff952" />
            <Color className="grey" hex="#EDEDF2" />
            <Color className="white" hex="#fbf6f6" />
          </div>
        </div>
        <div className="final">
          <a href="https://felicitylab.com/" target="_blank">
            <h3>View Website</h3>
          </a>
        </div>
      </Content>
    </>
  ),
};
