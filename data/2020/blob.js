import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Line from "../../components/LineEffect";
import blob from "../../public/logos/blobGrey.svg";
import Move from "../../components/Move";
export default {
  title: "Organic blob",
  img: blob,
  content: (
    <>
      <Content>
        <div className="under-content">
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
        <div className="under-content">
          <div>
            <h2>Colors</h2>
            <div className="colors">
              <Color className="salmon" hex="#A7D4B7" />
              <Color className="green" hex="#a7d4b7" />
              <Color className="white" hex="#fafafa" />
            </div>
          </div>
        </div>

        <h2>UsersFlow</h2>
      </Content>
    </>
  ),
};
