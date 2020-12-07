import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const Frame = dynamic(() => import("framer").then((module) => module.Frame), {
  ssr: false,
});
const Scroll = dynamic(() => import("framer").then((module) => module.Scroll), {
  ssr: false,
});

const ScrollHorizontal = ({ children }) => {
  return (
    <Scroll width="1500" height="100%" direction="horizontal" background="red">
      <Frame width="100%">{children}</Frame>

      <style jsx>{``}</style>
    </Scroll>
  );
};

export default ScrollHorizontal;
