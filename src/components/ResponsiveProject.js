// components/ResponsiveProject.js
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import anime from "animejs";
import { GithubIcon } from "@/components/Icons";

const animateSvgPaths = (svgRef) => {
  if (svgRef.current) {
    svgRef.current.style.opacity = "1";
    svgRef.current.style.visibility = "visible";

    const paths = svgRef.current.querySelectorAll("svg path");
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => i * 250,
    });
  }
};

const ResponsiveProject = ({
  img,
  title,
  type,
  summary,
  github,
  variant = "featured", // featured | normal
  svgs,
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

  const renderContent = (size) => {
    const layout = {
      featured: {
        imgWidth: {
          large: "w-[30%]",
          medium: "w-full max-w-[300px]",
          small: "w-full max-w-[200px]",
        },
        textWidth: {
          large: "w-[40%]",
          medium: "w-[45%]",
          small: "w-[80%]",
        },
        layout: "items-center gap-6",
        textAlign: "text-justify",
      },
      normal: {
        imgWidth: {
          large: "w-full max-w-[300px]",
          medium: "w-full max-w-[200px]",
          small: "w-full max-w-[150px]",
        },
        textWidth: {
          large: "w-[80%]",
          medium: "w-[80%]",
          small: "w-[40%]",
        },
        layout: "flex-col items-center gap-6",
        textAlign: "text-justify items-end text-right",
      },
    };

    const {
      imgWidth,
      textWidth,
      layout: layoutStyle,
      textAlign,
    } = layout[variant];

    return (
      <article
        ref={sectionRef}
        className={`relative ${svgs[size].visibility} py-6 flex justify-center`}>
        <div
          ref={svgRef}
          className="absolute inset-0 opacity-0 invisible w-full mx-auto flex justify-center items-center">
          {svgs[size].svg}
        </div>

        <div
          className={`relative ${layoutStyle} w-full max-w-[1100px] mx-auto`}>
          <div className={`${imgWidth[size]} z-10`}>
            <Image
              src={img}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className={`${textWidth[size]} flex flex-col ${textAlign}`}>
            <span className="text-lg font-semibold text-primary">{type}</span>
            <h2 className="text-xl md:text-2xl font-bold mt-2">{title}</h2>
            {summary && (
              <p className="mt-2 text-gray-700 text-sm md:text-base">
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

  return (
    <>
      {/* Large */}
      <div className="hidden xl:flex">{renderContent("large")}</div>

      {/* Medium */}
      <div className="hidden md:flex xl:hidden">{renderContent("medium")}</div>

      {/* Small */}
      <div className="flex md:hidden">{renderContent("small")}</div>
    </>
  );
};

export default ResponsiveProject;
