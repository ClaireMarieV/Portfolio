import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AnimatedLetterMiddle = ({ letter }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, ease: "easeIn" }}
      variants={{
        visible: { translateY: 0 },
        hidden: {
          translateY: 60,
        },
      }}
      style={{ margin: 10 }}
    >
      {letter}
    </motion.span>
  );
};

export default AnimatedLetterMiddle;
