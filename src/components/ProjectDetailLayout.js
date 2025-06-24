import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/ButtonPrimary";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const AnimatedHeadline = dynamic(
  () => import("@/components/AnimatedHeadline"),
  {
    ssr: false,
  }
);

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ScrollImage({ src, alt, index, containerRef, total }) {
  const ref = useRef(null);

  return (
    <section className="h-[50vh] xs:h-screen snap-start flex justify-center items-center relative">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 sm:top-12 md:top-28 lg:top-8 xl:top-8 text-center text-primary font-mono text-[18px] sm:text-[34px] font-bold z-30">
        {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
      </motion.h2>
      <div
        ref={ref}
        className="w-[80vw] h-[36vh] xs:h-[70vh] overflow-hidden relative">
        <Image src={src} alt={alt} fill className="object-contain" />

        {/* Bildnummer oben rechts */}
      </div>
    </section>
  );
}

const ProjectDetailLayout = ({
  title,
  sections,
  link,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  youtube,
}) => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const images = [img1, img2, img3, img4, img5, img6, img7].filter(Boolean);

  return (
    <main className="flex w-full min-h-screen justify-stretch">
      <Layout className="pt-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 relative">
          {/* TEXT LINKS */}
          <div className="relative z-10 lg:pr-12">
            <AnimatedHeadline
              text={title}
              className="text-primary mb-12 break-words !text-[clamp(2rem,7vw,10rem)] !leading-[clamp(2rem,7vw,9.5rem)]"
            />
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="mb-16 w-full xl:max-w-xl">
                <h2
                  className="text-2xl font-bold mb-3 text-primary"
                  dangerouslySetInnerHTML={{ __html: section.heading }}></h2>
                <p className="text-base leading-relaxed font-montserrat text-justify text-muted">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BILDER RECHTS */}
          <div className="relative">
            <div className="flex justify-center flex-col text-center z-20">
              <div className="text-primary text-sm">Hover Bild and scrolle</div>
              <div className="text-2xl text-primary animate-bounce mt-1">▼</div>
            </div>

            <div
              ref={scrollContainerRef}
              className="sticky top-0 h-[50vh] xs:h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory">
              {images.map((img, index) => (
                <ScrollImage
                  key={index}
                  src={img}
                  alt={`Image ${index + 1}`}
                  index={index}
                  containerRef={scrollContainerRef}
                  total={images.length}
                />
              ))}

              {/* Progress Bar */}
              <motion.div
                className="fixed top-0 bottom-0 w-1 bg-primary right-4 origin-top z-50"
                style={{ scaleY }}
              />
            </div>
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
        {link && (
          <div className="w-full flex justify-center px-4 -mt-4 pb-12">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium text-base sm:text-lg hover:underline hover:text-secundary transition">
              Hier geht’s {link.label}
            </a>
          </div>
        )}
        <div className="w-full flex justify-center xl:justify-end py-8">
          <Button text="← Zu den Projekten" href="/projekte" />
        </div>
      </Layout>
    </main>
  );
};

export default ProjectDetailLayout;
