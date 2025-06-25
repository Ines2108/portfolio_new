import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Nur aktivieren, wenn im Browser gerendert
    if (typeof window !== "undefined" && reference?.current) {
      setEnabled(true);
    }
  }, [reference]);

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  if (!enabled) return null;

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
          style={{ pathLength: scrollYProgress }}
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
