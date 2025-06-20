import Image from "next/image";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const AnimatedHeadline = dynamic(
  () => import("@/components/AnimatedHeadline"),
  {
    ssr: false,
  }
);

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ScrollImage({ src, alt, index, containerRef }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
  });

  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-[50vh] md:h-screen snap-start flex justify-center items-center relative">
      {/* Hover Hinweis & Pfeil */}
      <div className="absolute top-6 text-center z-20">
        <div className="text-primary text-sm">Hover picture and scroll</div>
        <div className="text-2xl text-primary animate-bounce mt-1">▼</div>
      </div>

      <div ref={ref} className="w-[80vw] h-[70vh] overflow-hidden relative">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>

      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="absolute text-primary font-mono text-[32px] font-bold z-30 top-[calc(12%-16px)] left-[calc(50%+180px)] leading-none">
        #{String(index + 1).padStart(3, "0")}
      </motion.h2>
    </section>
  );
}

const ProjectDetailLayout = ({
  title,
  headline,
  sections,
  img1,
  img2,
  img3,
  img4,
  img5,
  youtube,
}) => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const images = [img1, img2, img3, img4, img5];

  return (
    <main className="flex w-full min-h-screen justify-stretch">
      <Layout className="pt-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 relative">
          {/* TEXT LINKS */}
          <div className="relative z-10 lg:pr-12">
            <AnimatedHeadline
              text={headline}
              className="text-primary mb-12 break-words !text-[clamp(2rem,7vw,10rem)] !leading-[clamp(2rem,7vw,9.5rem)]"
            />
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="mb-16 max-w-xl">
                <h2 className="text-2xl font-bold mb-3 text-primary">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed text-justify text-muted">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BILDER RECHTS */}
          <div
            ref={scrollContainerRef}
            className="sticky top-0 h-[50vh] md:h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory">
            {images.map((img, index) => (
              <ScrollImage
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                index={index}
                containerRef={scrollContainerRef}
              />
            ))}

            {/* Progress Bar */}
            <motion.div
              className="fixed top-0 bottom-0 w-1 bg-primary right-4 origin-top z-50"
              style={{ scaleY }}
            />
          </div>
        </div>
        {youtube && (
          <div className="w-full flex justify-center px-4 py-12">
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${
                  youtube.split("v=")[1]
                }`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        )}
      </Layout>
    </main>
  );
};

export default ProjectDetailLayout;
