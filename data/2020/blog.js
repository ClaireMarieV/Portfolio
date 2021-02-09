import Picture from "../../components/Picture";
import Colors from "../../components/Colors";
import Fonts from "../../components/Fonts";
import Svg from "../../components/Svg";
import Content from "../../components/Content";
import ContentFlex from "../../components/ContentFlex";

export default {
  title: "Il etait une fois",

  content: (
    <>
      <Content>
        <h2>Typography</h2>
        <Fonts
          letters="Aa"
          font="Gravesend,sans-serif"
          sentence1="A B C D E F G H I J K L M N O P G R S T U V W X Y Z"
          sentence2="a b c d e f g h i j k l m n o p q r s t u v w x y z"
          weight="SemiBold"
          fontSecondary="Arboria"
          weight2="Regular"
          sentence3="A B C D E F G H I J K L M N O P G R S T U V W X Y Z"
          sentence4="a b c d e f g h i j k l m n o p q r s t u v w x y z"
        />
        <h2>Colors</h2>
        <div id="colors">
          <Colors className="color" hex="#262525" />
          <Colors className="color" hex="#f7c289" />
          <Colors className="color" hex="#ece0d5" />
        </div>
      </Content>
    </>
  ),
};
