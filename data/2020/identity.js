//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Pattern from "../../components/Pattern";
import SocialCard from "../../components/SocialCard";
import Sketches from "../../components/Sketches";

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
  content: (
    <>
      <Content>
        <div>
          <h4>About the project</h4>
          <p>
            My business needed a logo that my future customers would easily
            recognize and remember. To achieve this, it had to be simple and
            meaningful while showing my skills.
          </p>
        </div>
        <Sketches
          sketches={sketches}
          text={`I converted one of my sketches to a vector with Adobe Illustrator.
            I was looking for elegance but didn't want a black and white logo.
          The logo takes the overall shape of a diamond, further reinforced by
          the presence of an actual diamond at the top.
          The leaves are slightly bent to contrast with the sharpness of their angles.
          Although there has been a trend for thick strokes in 2021,
          the lines are thin and the asymmetry of the background color
          brings smoothness and modernity.`}
        />

        <h4>Colors</h4>
        <div className="colors">
          <Color code="#eff5f3" name="Cultured" />
          <Color code="#b3d1c6" name="Opal" />
          <Color code="#000000" name="Black" />
        </div>
        <h4>Final logo</h4>
        <div className="logo">
          <img src={logo} alt="logo" />
          <img src={logoGreen} alt="logo contour blanc fond vert" />
          <img src={logoWhite} alt="logo noir fond blanc" />
          <img src={logoBlack} alt="logo blanc fond noir" />
        </div>
        <Pattern pattern={pattern} />
        <SocialCard frontCard={frontCard} backCard={backCard} />
      </Content>
    </>
  ),
};
