import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const TranslateRight = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { translateX: 0 },
        hidden: {
          translateX: 100,
          skewX: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default TranslateRight;
