import { useState, useEffect } from "react";

const Picture = ({ picture }) => {
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
      <>
        <img
          src={picture.picture.src || picture.picture}
          srcSet={picture.picture.srcSet}
          ref={imageRefUpdated}
          onLoad={() => setPictureLoaded(true)}
          hidden={!pictureLoaded}
        />
        <img className="preview" src={picture.preview} hidden={pictureLoaded} />
        <style jsx>{`
          img {
            object-fit: cover;
            padding: 0.5rem;
            margin: 2rem;
            width: 100%;
            height: auto;
          }
        `}</style>
      </>
    );
  }
};

export default Picture;
