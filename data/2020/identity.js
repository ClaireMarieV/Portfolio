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
            My self-business need a logo that be identifiable and memorable by
            and for my futures employers. For this, the logo had to be simple
            and meaningful while showing my skills.
          </p>
        </div>
        <Sketches
          sketches={sketches}
          text={`I converted one of them to a vector with Adobe Illustrator. I was
          looking for elegance but didn't want a black and white logo. It is
          there unconsciously thanks to the global shape (diamond) repeated in
          the middle. The shapes of the leaves are angular and at the same time
          rounded. Although there has been a trend for thick strokes this year
          2021, the lines are fine and the asymmetry of the background color
          brings smoothness and modernization.`}
        />

        <h4>Colors</h4>
        <div className="colors">
          <Color code="#eff5f3" name="Cultured" />
          <Color code="#b3d1c6" name="Opal" />
          <Color code="#000000" name="Black" />
        </div>
        <h4>Final logo</h4>
        <div className="logo">
          <img src={logo} />
          <img src={logoGreen} />
          <img src={logoWhite} />
          <img src={logoBlack} />
        </div>
        <Pattern pattern={pattern} />
        <SocialCard frontCard={frontCard} backCard={backCard} />
      </Content>
    </>
  ),
};
