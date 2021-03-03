import { useState, useEffect } from "react";
import Parallax from "./Parallax";
const Picture = ({ picture, title }) => {
  const [pictureLoaded, setPictureLoaded] = useState(false);

  let imageElement = null;

  const imageRefUpdated = (image) => {
    if (image) {
      imageElement = image;
      if (image.complete) {
        setPictureLoaded(true);
      }
    }
  };

  useEffect(() => {
    imageRefUpdated(imageElement);
  });

  if (typeof picture === "string") {
    return <img src={picture} />;
  } else {
    return (
      <div className="picture">
        <Parallax>
          <h3>{title}</h3>
        </Parallax>

        <img
          src={picture.picture.src || picture.picture}
          srcSet={picture.picture.srcSet}
          ref={imageRefUpdated}
          onLoad={() => setPictureLoaded(true)}
          hidden={!pictureLoaded}
        />
        <img className="preview" src={picture.preview} hidden={pictureLoaded} />
        <style jsx>{`
          .picture {
            max-width: 33rem;
          }
          img {
            object-fit: cover;
            padding: 0.5rem;
            width: 100%;
            height: auto;
          }
        `}</style>
      </div>
    );
  }
};

export default Picture;
