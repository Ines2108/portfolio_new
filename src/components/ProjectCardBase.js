import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import anime from "animejs";
import { GithubIcon } from "@/components/Icons";

const animateSvgPaths = (ref) => {
  if (ref.current) {
    ref.current.style.opacity = "1";
    ref.current.style.visibility = "visible";
    const paths = ref.current.querySelectorAll("svg path");
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => i * 250,
    });
  }
};

const ProjectCardBase = ({
  title,
  type,
  summary,
  img,
  github,
  showSummary = false,
  visibleClass = "",
  svgConfig,
  layoutConfig,
}) => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-40% 0px",
  });

  useEffect(() => {
    if (isInView) animateSvgPaths(svgRef);
  }, [isInView]);

  return (
    <article
      ref={sectionRef}
      className={`relative ${visibleClass} flex justify-center`}>
      {/* SVG */}
      <div
        ref={svgRef}
        className="absolute inset-0 opacity-0 invisible w-full h-full flex justify-center items-center z-0">
        <svg
          className={`absolute inset-0 w-full h-full ${svgConfig.className}`}
          viewBox={svgConfig.viewBox}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d={svgConfig.path}
            stroke="#F85654"
            strokeWidth={svgConfig.strokeWidth}
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-10 flex gap-6 ${layoutConfig.wrapper}`}>
        <div className={`${layoutConfig.image}`}>
          <Image
            src={img}
            alt={title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className={`flex justify-center flex-col ${layoutConfig.content}`}>
          <span className="text-lg font-semibold text-primary">{type}</span>
          <h2 className={`font-bold mt-2 ${layoutConfig.title}`}>{title}</h2>
          {showSummary && summary && (
            <p
              className={`mt-2 text-gray-700 font-montserrat line-clamp-5 ${layoutConfig.summary}`}>
              {summary}
            </p>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="mt-4 flex justify-center">
              <GithubIcon className="w-8 h-8 text-gray-800 hover:text-primary transition" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCardBase;
