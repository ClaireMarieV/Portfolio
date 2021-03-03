//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Viewports from "../../components/Viewports";
import Parallax from "../../components/Parallax";

//Images
import logo from "../../public/logos/logoDef.svg";
import logoGreen from "../../public/logos/logo.svg";
import sketches from "../../public/pictures/identity/sketchs.jpg";
import logoWhite from "../../public/pictures/identity/logoSerieWhite.svg";
import logoBlack from "../../public/pictures/identity/logoSerieBlack.svg";
import frontCard from "../../public/pictures/identity/frontVisitCard.png";
import backCard from "../../public/pictures/identity/backVisitCard.png";
import pattern from "../../public/pictures/identity/pattern.svg";

export default {
  title: "identity design",
  category: "Graphic Design",
  img: logo,
  content: (
    <>
      <Content>
        <div className="under-content">
          <Parallax>
            <h2>About the project</h2>
          </Parallax>

          <p>
            My self-business need a logo that be identifiable and memorable by
            and for my futures employers. For this, the logo had to be simple
            and meaningful while showing my skills.
          </p>
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Sketchs</h2>
          </Parallax>

          <div className="sketch">
            <img src={sketches} />
          </div>
          <p>
            I converted one of them to a vector with Adobe Illustrator. I was
            looking for elegance but didn't want a black and white logo. It is
            there unconsciously thanks to the global shape (diamond) repeated in
            the middle. The shapes of the leaves are angular and at the same
            time rounded. Although there has been a trend for thick strokes this
            year 2021, the lines are fine and the asymmetry of the background
            color brings smoothness and modernization.
          </p>
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Colors</h2>
          </Parallax>

          <div className="colors">
            <Color className="white-green" hex="#eff5f3" />
            <Color className="green" hex="#b3d1c6" />
            <Color className="black" hex="#000000" />
          </div>
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Final logo</h2>
          </Parallax>

          <div className="logo">
            <img src={logo} />
            <img src={logoGreen} />
            <img src={logoWhite} />
            <img src={logoBlack} />
          </div>
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Pattern</h2>
          </Parallax>
          <img src={pattern} />
        </div>
        <div className="under-content">
          <Parallax>
            <h2>Social</h2>
          </Parallax>

          <div className="card">
            <img src={frontCard} />
            <img src={backCard} />
          </div>
        </div>
      </Content>
    </>
  ),
};
