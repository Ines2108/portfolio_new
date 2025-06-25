import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const LiIcon = ({ reference }) => {
  const isInView = useInView(reference, { once: true, margin: "-40% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ pathLength: 1 });
    }
  }, [isInView]);

  return (
    <figure className="absolute left-0 stroke-primary">
      <svg
        className="-rotate-90 w-[40px] h-[40px] xs:w-[60px] xs:h-[60px] md:w-[75px] md:h-[75px]"
        width="75"
        height="75"
        viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-secundary stroke-2 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
          initial={{ pathLength: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-2 animate-pulse fill-secundary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
