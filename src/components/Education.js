import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LinkedInIcon } from "./Icons";
import LiIcon from "./LiIcon";

const Details = ({ education, time, address, note }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 font-sans first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {education}
        </h3>
        <span className="capitalize font-medium text-dark/75 text-sm md:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{note}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-32 mb-80">
      <h2 className="text-5xl md:text-6xl lg:text-8xl text-primary font-bold text-center mb-16">
        Education
      </h2>
      <div ref={ref} className="w-full mx-auto relative lg:w-[90%] md:w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[20px] top-0 w-[2px] h-full bg-primary origin-top
          md:w-[4px] md:left-9 xs:left-[30px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
          <Details
            education="Bachelor of Science in Communication and Knowledge Media"
            time="Oct. 2022 - July 2025"
            address="Softwarepark 11, 4232 Hagenberg"
            note="Areas of Focus: Online Marketing, E-Learning, Web Development, Human-Computer-Interaction"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
