//Comnposants
import Color from "../../components/Color";
import Fonts from "../../components/Fonts";
import Picture from "../../components/Picture";

export default {
  title: "Il etait une fois",
  category: "ReactJs",
  concept: "/pictures/blog/wireframe.png",
  render: "/pictures/blog/blogDesktop.png",
  about: `"Il était une fois" is a blog originally created as a final project of end intensive training. It was written in PHP then I wanted to write it later to learn React.`,
  fonts: [
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
  ],
  colors: [
    { code: "#262525", name: "Eerie Black" },
    { code: "#f7c289", name: "Mellow Apricot" },
    { code: "#ece0d5", name: "Almond" },
  ],
  links: {
    website: "https://ilétaitunefois.fr/",
    source: "https://github.com/ClaireMarieV/blogReact",
  },
};
