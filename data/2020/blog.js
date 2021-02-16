import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Line from "../../components/LineEffect";
import pivoine from "../../public/logos/pivoine.svg";
export default {
  title: "Il etait une fois",
  img: pivoine,
  content: (
    <>
      <Content>
        <div className="under-content">
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
        <div className="under-content">
          <h2>Colors</h2>
          <div className="colors">
            <Color className="grey" hex="#262525" />
            <Color className="salmon" hex="#f7c289" />
            <Color className="white-pink" hex="#ece0d5" />
          </div>
        </div>
        <h2>UsersFlow</h2>
      </Content>
    </>
  ),
};
