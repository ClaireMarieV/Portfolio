import { useState, useEffect } from "react";

const Picture = ({ picture, alt, colorHex }) => {
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
        <div className="color">
          <figure>
            <img
              alt={alt}
              src={picture.picture.src || picture.picture}
              srcSet={picture.picture.srcSet}
              ref={imageRefUpdated}
              onLoad={() => setPictureLoaded(true)}
              hidden={!pictureLoaded}
            />
            <span>{colorHex}</span>
          </figure>
        </div>
        <style jsx>{`
          .color {
            display: flex;
            justify-content: center;
            flex-direction: row;
            max-width: 15rem;
            width: 100%;
          }
          figure {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 46%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `}</style>
      </>
    );
  }
};

export default Picture;
