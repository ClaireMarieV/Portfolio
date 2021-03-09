//Components
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Content from "../../components/Content";
import Picture from "../../components/Picture";
import Parallax from "../../components/Parallax";

export default {
  title: "Children to young adults",
  category: "UI/UX Design",
  concept: "/pictures/alice/wireframe.png",
  render: "/pictures/alice/alice.png",
  about: `This page go with the Doctolib profile of a psychologist specialized from childen to young adults.`,
  fonts: [
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
  ],
  colors: [{ code: "#a9c1ed" }, { code: "#ffe1d1" }, { code: "#ffffff" }],
  links: {
    website: "https://psychologue-alicefelt.fr",
  },
};
