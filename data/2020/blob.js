import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Parallax from "../../components/Parallax";
import Move from "../../components/Move";

import blob from "../../public/logos/blobGrey.svg";
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
      </Content>
    </>
  ),
};
