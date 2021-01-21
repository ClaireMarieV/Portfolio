import React, { useState, useEffect, useRef, createRef } from "react";

const animation = (node, animationPercentage) => {
  node.style.transform = `translate(0px, ${(1 - animationPercentage) * 100}%)`;
};

const AnimatedWords = ({ text }) => {
  const animationDuration = 1500;
  const staggerDelay = 150;

  const words = (text || "").split(" ");
  const wordsRef = useRef(words.map(() => createRef()));

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const startTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current === undefined) {
      startTimeRef.current = time;
    } else {
      wordsRef.current.forEach((ref, index) =>
        animation(
          ref.current,
          // On s'assure que le pourcentage ne soit pas au dessos de 100%
          Math.min(
            1,
            // On s'assure que le pourcentage ne soit pas en dessous de 0%
            Math.max(
              0,
              // On prend le temps courant, on y soustrait le temps de début de l'animation.
              // A ça, on y soustrait le décalage du mot
              // On divise le tout par la durée de l'animation
              (time - startTimeRef.current - index * staggerDelay) /
                animationDuration
            )
          )
        )
      );
    }
    if (
      startTimeRef.current +
        animationDuration +
        (words.length - 1) * staggerDelay >
      time
    ) {
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return (
    <div className="split">
      <h2>
        {words
          .map((word, wordIndex) => (
            <span key={wordIndex} ref={wordsRef.current[wordIndex]}>
              {word}
            </span>
          ))
          .reduce(
            (acc, word, index) =>
              acc.concat(
                index > 0
                  ? [<span className="whitespace"></span>, word]
                  : [word]
              ),
            []
          )}
      </h2>
      <style jsx>
        {`
          .split {
            display: flex;
            justify-content: center;
            margin: auto;
          }
          h2 {
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            font-weight: bold;
          }
          h2 > span {
            display: inline-block;
            transform: translate(0px, 100%);
          }
          h2 > span.whitespace {
            width: 0.5rem;
          }
          @media (max-width: 600px) {
            .article-base-title {
              line-height: normal;
              display: block;
            }
            h2 {
              font-size: 2.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedWords;
