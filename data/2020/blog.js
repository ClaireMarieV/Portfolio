import Picture from "../../components/Picture";
import Colors from "../../components/Colors";
import Fonts from "../../components/Fonts";
import Svg from "../../components/Svg";
import Content from "../../components/Content";
import ContentFlex from "../../components/ContentFlex";

import pink from "../../public/svg/colors/colorBlogPink.svg";
import grey from "../../public/svg/colors/colorBlogGrey.svg";
import dark from "../../public/svg/colors/colorBlog.svg";
import gravesend from "../../public/svg/fonts/gravesend.svg";
import arboria from "../../public/svg/fonts/arboria.svg";
import raleway from "../../public/svg/fonts/raleway.svg";
export default {
  title: "Il etait une fois",

  content: (
    <>
      <Content>
        <h3>colors</h3>
        <div className="colors">
          <div id="line"></div>
          <Colors
            picture={{ picture: pink }}
            colorHex="#ecbf9e"
            alt="couleur beige rosé"
          />
          <Colors
            picture={{ picture: grey }}
            colorHex="#ece0d5"
            alt="couleur gris clair rosé"
          />
          <Colors
            picture={{ picture: dark }}
            colorHex="#262525"
            alt="couleur gris foncé opaque"
          />
        </div>
      </Content>
      <Content>
        <h3>fonts</h3>
        <Fonts
          font="GRAVESEND, SANS SERIF"
          letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          sentence="Let's go to create something"
        />
        <Svg />
        <Fonts
          font="ARBORIA, SANS-SERIF"
          letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          sentence="Let's go to create something"
        />
        <Svg />

        <Fonts
          font="RALEWAY, SANS-SERIF"
          letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          sentence="Let's go to create something"
        />
        <Svg />
      </Content>
    </>
  ),
};
