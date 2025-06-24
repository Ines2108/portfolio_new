import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import anime from "animejs";
import { GithubIcon } from "@/components/Icons";

const FeaturedProject = ({ type, title, summary, img, github }) => {
  const sectionRefLarge = useRef(null);
  const sectionRefMedium = useRef(null);
  const sectionRefSmall = useRef(null);
  const svgRefLarge = useRef(null);
  const svgRefMedium = useRef(null);
  const svgRefSmall = useRef(null);

  const isInViewLarge = useInView(sectionRefLarge, {
    once: true,
    margin: "-50% 0px",
  });
  const isInViewMedium = useInView(sectionRefMedium, {
    once: true,
    margin: "-50% 0px",
  });
  const isInViewSmall = useInView(sectionRefSmall, {
    once: true,
    margin: "-50% 0px",
  });

  useEffect(() => {
    if (isInViewLarge && svgRefLarge.current) {
      anime.set(svgRefLarge.current, { opacity: 1, visibility: "visible" });
      anime({
        targets: ".tech-svg-large path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: (el, i) => i * 250,
      });
    }
  }, [isInViewLarge]);

  useEffect(() => {
    if (isInViewMedium && svgRefMedium.current) {
      anime.set(svgRefMedium.current, { opacity: 1, visibility: "visible" });
      anime({
        targets: ".tech-svg-medium path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: (el, i) => i * 250,
      });
    }
  }, [isInViewMedium]);

  useEffect(() => {
    if (isInViewSmall && svgRefSmall.current) {
      anime.set(svgRefSmall.current, { opacity: 1, visibility: "visible" });
      anime({
        targets: ".tech-svg-small path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: (el, i) => i * 250,
      });
    }
  }, [isInViewSmall]);

  return (
    <>
      {/* Große Version (ab 1280px) */}
      <article
        ref={sectionRefLarge}
        className="relative hidden xl:block w-full mx-auto py-6 sm:p-10 bg-transparent">
        {/* SVG Rahmen */}
        <div
          ref={svgRefLarge}
          className="absolute inset-0 opacity-0 invisible w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full tech-svg-large"
            viewBox="0 0 1900 700"
            preserveAspectRatio="xMidYMid meet" // Hinzugefügt, um das SVG dynamisch zu skalieren
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 500V4H1930V600H204.95"
              stroke="#F85654"
              strokeWidth="10"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* Inhalt */}
        <div className="relative flex items-center gap-12">
          <div className="w-[30%] -ml-8 xl:-ml-8 xl:mr-12">
            <Image
              src={img}
              alt={title}
              className="w-full max-w-[550px] h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-[40%] flex flex-col text-justify">
            <span className="text-lg font-semibold text-primary">{type}</span>
            <h2 className="text-3xl font-bold mt-2">{title}</h2>
            <p className="mt-2 text-gray-700 font-sans text-base line-clamp-5">
              {summary}
            </p>
            {github && (
              <Link
                href={github}
                target="_blank"
                className="mt-4 flex justify-center lg:justify-start">
                <GithubIcon className="w-8 h-8 text-gray-800 hover:text-primary transition" />
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Medium Version (768px - 1279px) */}
      <article
        ref={sectionRefMedium}
        className="relative hidden xl:hidden py-6 bg-transparent md:flex md:justify-center">
        {/* SVG Rahmen */}
        <div
          ref={svgRefMedium}
          className="absolute inset-0 opacity-0 invisible w-full max-w-[700px] mx-auto h-full flex justify-center items-center">
          <svg
            className="absolute inset-0 w-full h-full tech-svg-medium"
            viewBox="0 0 1400 800"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 400V4H1450V796H150.95"
              stroke="#F85654"
              strokeWidth="13"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* Inhalt */}
        <div className="relative flex items-center gap-6 w-full max-w-[700px] mx-auto">
          <div className="w-full max-w-[300px]">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-[45%] text-justify">
            <span className="text-lg font-semibold text-primary">{type}</span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2">{title}</h2>
            <p className="mt-2 text-gray-700 font-sans text-sm sm:text-base line-clamp-5">
              {summary}
            </p>
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

      {/* Kleine Version (< 768px) */}
      <article
        ref={sectionRefSmall}
        className="relative md:hidden py-6 flex justify-center">
        {/* SVG Rahmen */}
        <div
          ref={svgRefSmall}
          className="absolute inset-0 opacity-0 invisible w-full max-w-[500px] min-h-[500px] mx-auto flex justify-center items-center">
          <svg
            className="absolute inset-0 w-full h-full tech-svg-small"
            viewBox="0 0 900 1600"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 650V5H880V1580H100.95"
              stroke="#F85654"
              strokeWidth="15"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* Inhalt */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[300px] mx-auto">
          <div className="w-full max-w-[200px]">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-[80%] flex flex-col items-end text-justify pr-4">
            <span className="text-lg font-semibold text-primary">{type}</span>
            <h2 className="text-xl md:text-2xl font-bold mt-2 !text-right">
              {title}
            </h2>
            <p className="mt-2 text-gray-700 font-sans text-sm md:text-base line-clamp-5">
              {summary}
            </p>
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

export default FeaturedProject;
