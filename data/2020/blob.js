import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Parallax from "../../components/Parallax";
import Move from "../../components/Move";
import Picture from "../../components/Picture";

import blob from "../../public/logos/blobGrey.svg";
import wireframe from "../../public/pictures/blob/wireframe.svg";
import final from "../../public/pictures/blob/blobBis.png";

export default {
  title: "Organic blob",
  category: "UI/UX Design",
  content: (
    <>
      <Content>
        <div className="under-content">
          <Parallax>
            <h2>About the project</h2>
          </Parallax>
        </div>
        <Picture title="Wireframe" picture={{ picture: wireframe }} />

        <div className="under-content">
          <Parallax>
            <h2>Typography</h2>
          </Parallax>
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
        <div className="under-content">
          <Parallax>
            <h2>Colors</h2>
          </Parallax>

          <div className="colors">
            <Color className="salmon" hex="#A7D4B7" />
            <Color className="green" hex="#a7d4b7" />
            <Color className="white" hex="#fafafa" />
          </div>
        </div>
        <div className="final">
          <Picture title="Final" picture={{ picture: final }} />
          <a href="https://github.com/ClaireMarieV/Blob" target="_blank">
            <h3>View source code</h3>
          </a>
        </div>
      </Content>
    </>
  ),
};
