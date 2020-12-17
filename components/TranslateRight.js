import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const TranslateRight = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      id={id}
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
      style={{ padding: 50 }}
    >
      {children}
      <style jsx>{`
        div {
          padding: 3rem;
          min-height: fit-content;
        }
      `}</style>
    </motion.div>
  );
};

export default TranslateRight;
