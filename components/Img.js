import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Img = ({ children }) => {
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
      transition={{ duration: 0.8 }}
      style={{
        zIndex: 1,
        maxWidth: "43vw",
      }}
      variants={{
        visible: { top: 0 },
        hidden: { top: -10 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Img;
