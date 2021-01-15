import Picture from "../../components/picture";

import Home from "../../public/pictures/HomeBlog.jpg?resize&sizes[]=250&sizes[]=400";
import HomePreview from "../../public/pictures/HomeBlog.jpg?lqip";

export default {
  title: "Il etait une fois",

  content: (
    <>
      <div>
        <Picture
          picture={{ preview: HomePreview, picture: Home }}
          alt="Index blog"
        />
        <h3>Colors</h3>
        <div>
          <img
            src="../../public/svg/colors/colorBlogPink.svg"
            alt="Couleur beige rosé"
          />
          <img
            src="../../public/svg/colors/colorBlogPink.svg"
            alt="Couleur gris rosé"
          />
          <img
            src="../../public/svg/colors/colorBlogPink.svg"
            alt="Couleur gris foncé opaque"
          />
        </div>
      </div>
      <h3>Fonts</h3>

      <div>
        <img src="" alt="Couleur beige rosé" />
        <img src="" alt="Couleur gris rosé" />
        <img src="" alt="Couleur gris foncé opaque" />
      </div>

      <p></p>

      <p></p>
    </>
  ),
};
