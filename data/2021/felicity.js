import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Line from "../../components/LineEffect";
import felicity from "../../public/logos/felicity.svg";

export default {
  title: "FelicityLab",
  img: felicity,
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
                label: "Tertiary",
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
        <div className="under-content">
          <h2>UsersFlow</h2>
        </div>
      </Content>
    </>
  ),
};
