"use client";

import { motion, useScroll } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        originX: 0,
        backgroundColor: "#1a1a1a",
      }}
    />
  );
};
