import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Line from "../../components/LineEffect";

export default {
  title: "FelicityLab",

  content: (
    <>
      <Content>
        <div className="under-content">
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
                label: "Third",
              },
            ]}
          />
        </div>
        <div className="under-content">
          <h2>Colors</h2>
          <div className="colors">
            <Color className="dark-blue" hex="#1e1d28" />
            <Color className="yellow" hex="#fff952" />
            <Color className="grey" hex="#EDEDF2" />
            <Color className="white" hex="#fbf6f6" />
          </div>
        </div>
        <h2>UsersFlow</h2>
      </Content>
    </>
  ),
};
