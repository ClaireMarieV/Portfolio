import React from "react";

const Fonts = ({ fonts }) => (
  <div className="fonts">
    <div>
      <h1 style={{ fontFamily: fonts[0].family }}>Aa</h1>
    </div>
    {fonts.map((font) => (
      <div key={font.family} className="content-font">
        <div className="font">
          <div>
            <span>{font.label}: </span>
            <span style={{ fontWeight: font.weight, fontFamily: font.family }}>
              {font.family}
            </span>
          </div>
          <div>
            <span>Weight: </span>
            <span style={{ fontWeight: font.weight }}>{font.weight}</span>
          </div>
        </div>
        <div className="sentence">
          <span style={{ fontWeight: font.weight, fontFamily: font.family }}>
            A B C D E F G H I J K L M N O P G R S T U V W X Y Z
          </span>
          <span style={{ fontWeight: font.weight, fontFamily: font.family }}>
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </span>
        </div>
      </div>
    ))}
    <style jsx>{`
      .fonts {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        justify-items: baseline;
      }
      h1 {
        font-size: 3rem;
      }
      .fonts span {
        font-size: 1.3rem;
        align-self: center;
        justify-self: center;
      }
      .content-font {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        justify-items: baseline;
      }
      .font {
        display: flex;
        flex-direction: row;
        gap: 2rem;
      }
      .sentence {
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 800px) {
        .fonts {
          display: grid;
          grid-template-columns: auto;
        }
      }
      @media (max-width: 400px) {
        .font {
          display: block;
        }
        .sentence {
          display: block;
        }
      }
    `}</style>
  </div>
);

export default Fonts;
