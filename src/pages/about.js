import Layout from "@/components/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";
import React from "react";
import PolaroidImages from "@/components/PolaroidImages";
import AboutText from "@/components/AboutText";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const AnimatedHeadline = dynamic(
  () => import("@/components/AnimatedHeadline"),
  {
    ssr: false,
  }
);

const about = () => {
  return (
    <>
      <Head>
        <title>Ines Portfolio | About</title>
        <meta name="description" content="About Ines" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedHeadline text="Das bin ich" className="text-primary" />
          {/* About Section */}
          <section className="about-section relative max-w-[1800px] w-full mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start mt-10 mb-36 md:mb-16 lg:mb-32">
            <div className="w-full h-full self-center lg:w-1/2 flex justify-center lg:justify-start pl-0 xl:pl-16 xxl:pl-36 pt-4 lg:pt-28">
              <PolaroidImages />
            </div>
            <div className="w-full lg:w-1/2 px-0 lg:pl-10 xxl:pl-24 text-justify">
              <AboutText />
            </div>
          </section>
          <section className="techStack-section relative w-full my-16 md:my-32">
            <Skills />
          </section>
          <section className="cv-section relative max-w-[1500px] w-full mx-auto justify-center">
            <Experience />
            <Education />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default about;
