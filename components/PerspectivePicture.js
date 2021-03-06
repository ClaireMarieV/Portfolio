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
      className="container-perspective"
      variants={{
        visible: {
          transformPerspective: 0,
        },
        hidden: {
          transformPerspective: 4000,
        },
      }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ ease: "easeOut", duration: 1.5 }}
        variants={{
          visible: {
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
            translateZ: 0,
          },
          hidden: {
            rotateY: 30,
            rotateX: 30,
            rotateZ: -3,
            translateY: 5,
            translateZ: 10,
          },
        }}
      >
        {children}
      </motion.div>
      <style jsx>{`
        .container-perspective {
          transition: all 0.5s ease-out;
        }
        .container-perspective:hover {
          transition: all 0.5s ease-out;
        }
      `}</style>
    </motion.div>
  );
};

export default PerspectivePicture;
