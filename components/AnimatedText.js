import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AnimatedText = ({ letter }) => {
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
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: {
          opacity: 0,
          translateY: 140,
        },
      }}
      style={{ margin: 20 }}
    >
      {letter}
    </motion.span>
  );
};

export default AnimatedText;
