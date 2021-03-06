import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Parallax from "../../components/Parallax";
import Move from "../../components/Move";
import Picture from "../../components/Picture";

import blob from "../../public/logos/blobGrey.svg";
import wireframe from "../../public/pictures/blob/wireframe.png";
import final from "../../public/pictures/blob/blob.png";

const old = {
  title: "Organic blob",
  category: "UI/UX Design",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Picture title="Concept final" picture={{ picture: wireframe }} />
          <Picture title="HomePage" picture={{ picture: final }} />
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
                family: "Raleway, sans-serif",
                weight: "SemiBold",
                label: "Primary",
              },
              {
                family: "Quicksand, sans-serif",
                weight: "Regular",
                label: "Secondary",
              },
            ]}
          />
        </div>
        <div>
          <h2>Colors</h2>
          <div className="colors">
            <Color className="salmon" hex="#A7D4B7" />
            <Color className="green" hex="#a7d4b7" />
            <Color className="white" hex="#fafafa" />
          </div>
        </div>
        <div className="final">
          <a href="https://github.com/ClaireMarieV/Blob" target="_blank">
            <h3>View source code</h3>
          </a>
        </div>
      </Content>
    </>
  ),
};

export default {
  title: "Organic blob",
  concept: "/pictures/blob/wireframe.png",
  render: "/pictures/blob/blob.png",
  about: `"Il était une fois" is a blog originally created as a final project of end intensive training. It was written in PHP then I wanted to write it later to learn React.`,
  fonts: [
    {
      family: "Raleway, sans-serif",
      weight: "SemiBold",
      label: "Primary",
    },
    {
      family: "Quicksand, sans-serif",
      weight: "Regular",
      label: "Secondary",
    },
  ],
  colors: [{ code: "#f7c289" }, { code: "#a7d4b7" }, { code: "#fafafa" }],
  links: { source: "https://github.com/ClaireMarieV/Blob" },
};
