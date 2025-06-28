import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import anime from "animejs";
import { GithubIcon } from "@/components/Icons";

const animateSvgPaths = (ref) => {
  if (ref.current) {
    // Mache den Wrapper sichtbar
    ref.current.style.opacity = "1";
    ref.current.style.visibility = "visible";

    const paths = ref.current.querySelectorAll("svg path");
    if (paths.length === 0) return;

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => i * 250,
    });
  }
};

const Projects = ({ type, title, img, github }) => {
  const projectSectionRefLarge = useRef(null);
  const projectSectionRefMedium = useRef(null);
  const projectSectionRefSmall = useRef(null);
  const projectSvgRefLarge = useRef(null);
  const projectSvgRefMedium = useRef(null);
  const projectSvgRefSmall = useRef(null);

  const isInViewLarge = useInView(projectSectionRefLarge, {
    once: true,
    margin: "-40% 0px",
  });
  const isInViewMedium = useInView(projectSectionRefMedium, {
    once: true,
    margin: "-40% 0px",
  });
  const isInViewSmall = useInView(projectSectionRefSmall, {
    once: true,
    margin: "-40% 0px",
  });

  useEffect(() => {
    if (isInViewLarge) {
      animateSvgPaths(projectSvgRefLarge);
    }
  }, [isInViewLarge]);

  useEffect(() => {
    if (isInViewMedium) {
      animateSvgPaths(projectSvgRefMedium);
    }
  }, [isInViewMedium]);

  useEffect(() => {
    if (isInViewSmall) {
      animateSvgPaths(projectSvgRefSmall);
    }
  }, [isInViewSmall]);

  return (
    <>
      {/* Large (xl) */}
      <article
        ref={projectSectionRefLarge}
        className="relative hidden xl:flex py-8 pr-16 justify-center min-h-[500px]">
        <div
          ref={projectSvgRefLarge}
          className="absolute inset-0 mt-4 opacity-0 invisible w-full h-full max-w-[1100px] mx-auto flex justify-center items-center">
          <svg
            className="absolute inset-0 w-full h-full projects-svg-large"
            viewBox="0 0 1100 1820"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 650V5H1180V1780H110.95"
              stroke="#F85654"
              strokeWidth="25"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-[400px] mx-auto">
          <div className="w-full max-w-[300px] z-10">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto ml-[2.5rem] object-cover rounded-lg"
            />
          </div>
          <div className="max-w-[280px] flex flex-col items-end text-justify">
            <span className="text-lg font-semibold text-primary">{type}</span>
            <h2 className="text-xl md:text-2xl font-bold mt-2 !text-right">
              {title}
            </h2>
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

      {/* Medium (md) */}
      <article
        ref={projectSectionRefMedium}
        className="relative hidden md:flex xl:hidden py-6 justify-center pr-8 min-w-[330px] max-w-[365px] min-h-[370px]">
        <div
          ref={projectSvgRefMedium}
          className="absolute inset-0 opacity-0 invisible w-full max-w-[900px] mx-auto flex justify-center items-center">
          <svg
            className="absolute inset-0 w-full h-full projects-svg-medium"
            viewBox="0 0 900 1600"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 650V5H980V1580H100.95"
              stroke="#F85654"
              strokeWidth="20"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-6 w-full max-w-[300px] mx-auto">
          <div className="w-full max-w-[200px] ml-12 z-10">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-[65%] flex flex-col items-end ml-12">
            <span className="text-lg font-semibold text-primary text-right">
              {type}
            </span>
            <h2 className="text-xl md:text-2xl font-bold mt-2 !text-right">
              {title}
            </h2>
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

      {/* Small (< md) */}
      <article
        ref={projectSectionRefSmall}
        className="relative md:hidden py-6 flex justify-center w-[288px] min-h-[315px]">
        <div
          ref={projectSvgRefSmall}
          className="absolute inset-0 opacity-0 invisible w-full mx-auto flex justify-center items-center">
          <svg
            className="absolute inset-0 w-full h-full projects-svg-small"
            viewBox="0 0 960 1600"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 650V5H980V1580H100.95"
              stroke="#F85654"
              strokeWidth="20"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-6 w-full mx-auto">
          <div className="w-full max-w-[180px] ml-2">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-[55%] flex flex-col items-end ml-4">
            <span className="text-lg font-semibold text-primary text-right">
              {type}
            </span>
            <h2 className="text-xl md:text-2xl font-bold mt-2 !text-right">
              {title}
            </h2>
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
    </>
  );
};

export default Projects;
