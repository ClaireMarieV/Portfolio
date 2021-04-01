import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const PerspectivePicture = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const transition = {};

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="container-bottom"
      animate={controls}
      initial="hidden"
      transition={{ ease: "easeOut", duration: 1 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -50, opacity: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PerspectivePicture;
