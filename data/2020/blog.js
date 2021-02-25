//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Line from "../../components/LineEffect";
import Viewports from "../../components/Viewports";

//Images
import pivoine from "../../public/logos/pivoine.svg";
import blogDesktop from "../../public/pictures/blog/blogDesktop.png";
import tablettePortrait from "../../public/pictures/blog/blogTablettePortrait.png";
import tablettePaysage from "../../public/pictures/blog/blogTablettePaysage.png";
import phonePortrait from "../../public/pictures/blog/blogPortraitSmartphone.png";
import phonePaysage from "../../public/pictures/blog/blogPaysageSmartphone.png";

export default {
  title: "Il etait une fois",
  category: "BLOG",
  img: pivoine,
  content: (
    <>
      <Content>
        <div className="under-content">
          <h2>About the project</h2>
          <p></p>
        </div>
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
        <div className="under-content">
          <h2>Viewports</h2>
        </div>
      </Content>
    </>
  ),
};
