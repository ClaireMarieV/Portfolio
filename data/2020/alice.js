import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Line from "../../components/LineEffect";
import papillon from "../../public/logos/papillonBis.svg";

export default {
  title: "Children to young adults",
  img: papillon,
  content: (
    <>
      <Content>
        <div className="under-content">
          <h2>Typography</h2>
          <Fonts
            fonts={[
              {
                family: "Professor,sans-serif",
                weight: "Regular",
                label: "Primary",
              },
              {
                family: "Acumin-pro,sans-serif",
                weight: "Bold",
                label: "Secondary",
              },
              {
                family: "Graphie,sans-serif",
                weight: "Regular",
                label: "Tertiary",
              },
            ]}
          />
        </div>
        <div className="under-content">
          <h2>Colors</h2>
          <div className="colors">
            <Color className="blue" hex="#a9c1ed" />
            <Color className="neutral" hex="#ffe1d1" />
            <Color className="white" hex="#ffffff" />
          </div>
        </div>
        <h2>UsersFlow</h2>
      </Content>
    </>
  ),
};
