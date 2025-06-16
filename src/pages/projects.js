// /pages/projects/index.js
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import { projectsData } from "@/data/projectsData"; // Import Projektinfos
import Link from "next/link";

const AnimatedHeadline = dynamic(
  () => import("@/components/AnimatedHeadline"),
  { ssr: false }
);

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Ines Portfolio | Projects</title>
        <meta name="description" content="Ines' Projects" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedHeadline
            text="From Idea to Reality"
            className=" mb-10 text-primary"
          />

          <section className="project-section mt-8 mb-16 w-full max-w-[1800px] mx-auto grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-12 gap-24 xl:gap-">
            {projectsData.map((project, i) => {
              const isFeatured = project.featured;
              if (isFeatured) {
                return (
                  <div
                    key={project.slug}
                    className="col-span-1 xs:col-span-2 xl:col-span-12 flex justify-center">
                    <Link href={`/projects/${project.slug}`}>
                      <FeaturedProject
                        title={project.title}
                        img={project.img1}
                        summary={project.sections[0].text}
                        type={project.sections[0].heading}
                      />
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div
                    key={project.slug}
                    className="col-span-1 xl:col-span-6 flex justify-center">
                    <Link href={`/projects/${project.slug}`}>
                      <Projects
                        title={project.title}
                        img={project.img1}
                        type={project.sections[0].heading}
                      />
                    </Link>
                  </div>
                );
              }
            })}
          </section>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
