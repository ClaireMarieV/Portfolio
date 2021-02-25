//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Line from "../../components/LineEffect";
import Viewports from "../../components/Viewports";

//Images
import logo from "../../public/logos/logoDef.svg";
import logoGreen from "../../public/logos/logo.svg";
import sketches from "../../public/pictures/identity/sketchesBis.jpg";
import sketch from "../../public/pictures/identity/sketchDef.jpg";
import logoWhite from "../../public/pictures/identity/logoSerieWhite.svg";
import logoBlack from "../../public/pictures/identity/logoSerieBlack.svg";
import frontCard from "../../public/pictures/identity/frontVisitCard.png";
import backCard from "../../public/pictures/identity/backVisitCard.png";
import pattern from "../../public/pictures/identity/pattern.svg";

export default {
  title: "identity design",
  category: "BLOG",
  img: logo,
  content: (
    <>
      <Content>
        <div className="under-content">
          <h2>About the project</h2>
          <p>
            My self-business need a logo that be identifiable and memorable by
            and for my futures employers. For this, the logo had to be simple
            and meaningful while showing my skills.
          </p>
        </div>
        <div className="under-content">
          <h2>Sketchs</h2>
          <div className="sketch">
            <img src={sketches} />
            <img src={sketch} />
          </div>
        </div>
        <div className="under-content">
          <h2>Colors</h2>
          <div className="colors">
            <Color className="white-green" hex="#eff5f3" />
            <Color className="green" hex="#b3d1c6" />
            <Color className="black" hex="#000000" />
          </div>
        </div>
        <div className="under-content">
          <h2>Final logo</h2>
          <div className="sketch">
            <img src={logo} />
            <img src={logoGreen} />
            <img src={logoWhite} />
            <img src={logoBlack} />
          </div>
          <p>
            I converted one of them into a vector. I was looking for an elegance
            but I did not want a black and white logo where the unconscious
            diamond in addition to the one in the middle. The shapes of the
            leaves are angular and at the same time rounded. The lines are fine
            and the asymmetry of the background color brings a softness and a
            modernization.
          </p>
        </div>
        <div className="under-content">
          <h2>Pattern</h2>
          <img src={pattern} />
        </div>
        <div className="under-content">
          <h2>Social</h2>
          <div className="card">
            <img src={frontCard} />
            <img src={backCard} />
          </div>
        </div>
      </Content>
    </>
  ),
};
