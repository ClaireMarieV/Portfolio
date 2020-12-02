import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const TranslateRepeat = ({ title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  return (
    <div className="container">
      <motion.div
        ref={ref}
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          stiffness: 150,
          bounce: 2,
        }}
        style={{
          fontSize: 35,
          fontWeight: "bold",
        }}
      >
        {title}
      </motion.div>
      <style jsx>{`
        .container {
          height: 25vh;
          display: "flex",
          align-items: "center",
        }
      `}</style>
    </div>
  );
};

export default TranslateRepeat;
