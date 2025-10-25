import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import anime from "animejs";

const techSkills = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "HTML/CSS",
  "JavaScript",
  "Tailwind",
  "React",
  "Vue",
  "Angular",
  "Storyblok",
  "Typo3",
  "Craft CMS",
  "Figma",
  "Canva",
  "META Business Suite",
];

const Skills = () => {
  const sectionRef = useRef(null);
  const svgRefSmall = useRef(null);
  const svgRefLarge = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50% 0px" });

  useEffect(() => {
    if (isInView) {
      [svgRefSmall.current, svgRefLarge.current].forEach((svg) => {
        if (svg) {
          anime.set(svg, { opacity: 1, visibility: "visible" });
          anime({
            targets: svg.querySelectorAll("path"),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 1500,
            delay: (el, i) => i * 250,
          });
        }
      });
    }
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="mx-auto w-full max-w-6xl px-4 md:px-8 lg:px-12">
      <div className="flex flex-col items-center relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-bold text-center mb-8">
          Mein digitaler Werkzeugkasten
        </h2>

        {/* Small screens */}
        <div className="block sm:hidden relative w-full">
          <div
            ref={svgRefSmall}
            className="relative opacity-0 invisible w-full h-0 pb-[155%] xs:pb-[140%]">
            <svg
              className="absolute inset-0 w-full h-full tech-svg"
              viewBox="0 0 880 1380"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 650V5H880V1350H100.95"
                stroke="#F85654"
                strokeWidth="10"
                strokeMiterlimit="10"
              />
            </svg>

            <div className="absolute top-[-25px] xs:top-[-15px] left-0 w-full h-full grid grid-cols-2 gap-2 px-6 py-12 place-items-center">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center px-4 py-2 border xs:border-2 border-primary rounded bg-white text-primary text-xs xs:text-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}>
                  <div className="w-[60px] xs:w-[70px] text-center grayscale">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Large screens */}
        <div className="hidden sm:block relative w-full md:w-3/4">
          <div
            ref={svgRefLarge}
            className="relative opacity-0 invisible w-full h-0 pb-[95%]">
            <svg
              className="absolute inset-0 w-full h-full tech-svg"
              viewBox="0 0 824 684"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 434.431V4H820V680H204.95"
                stroke="#F85654"
                strokeWidth="10"
                strokeMiterlimit="10"
              />
            </svg>

            <div className="absolute top-0 lg:top-[18px] left-0 w-full h-full max-h-[85%] grid grid-cols-3 gap-4 px-8 pt-16 place-items-center">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center px-4 py-2 lg:px-8 lg:py-4 border-2 lg:border-4 border-primary rounded-md bg-white text-primary text-sm lg:text-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}>
                  <div className="sm:w-[90px] md:w-[80px] lg:w-[100px] text-center grayscale">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
