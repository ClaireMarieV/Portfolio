import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Line from "../../components/LineEffect";

export default {
  title: "Il etait une fois",

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
          <div id="colors">
            <Color className="color" hex="#262525" />
            <Color className="color" hex="#f7c289" />
            <Color className="color" hex="#ece0d5" />
          </div>
        </div>
        <h2>UsersFlow</h2>
      </Content>
    </>
  ),
};
