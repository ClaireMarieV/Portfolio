import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Parallax = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="parallax-container">
      <motion.div
        className="overlay"
        animate={{ y: 0 }}
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6 }}
        whileHover={{ translateY: 30, transition: { duration: 0.4 } }}
        variants={{
          visible: { y: -25, opacity: 1 },
          hidden: { y: -70, opacity: 0.5 },
        }}
      >
        {children}
      </motion.div>
      <style jsx>{``}</style>
    </div>
  );
};

export default Parallax;
