import React, { useState, useEffect, useRef, createRef } from "react";

const AnimatedWords = ({ text }) => {
  const animationTime = 500;
  const staggerTime = 50;

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
      console.log(time);
    } else {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      wordsRef.current.forEach(
        (ref) =>
          (ref.current.style.transform = `translate(0px, ${
            (1 - (time - startTimeRef.current) / animationTime) * 100
          }%)`)
      );
    }
    if (startTimeRef.current + animationTime > time) {
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
