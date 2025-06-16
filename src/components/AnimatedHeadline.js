import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = (delay) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay, ease: "easeOut" },
  },
});

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fadeInVariants(delay)}
      className={`${className} uppercase font-extrabold text-[clamp(4rem,10vw,14rem)] leading-[clamp(3rem,9vw,11.5rem)]`}>
      {text}
    </motion.h1>
  );
};

export default AnimatedText;
