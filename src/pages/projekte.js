import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { easterEggData } from "@/data/easterEggData";
import Popup from "@/components/Popup";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import ProjectCard from "@/components/ProjectCard";

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
        <Layout className="pt-16 mb-12 md:mb-32">
          <AnimatedHeadline
            className="mb-10 text-primary"
            text={
              <>
                Ein paar meiner{" "}
                <Popup
                  title={easterEggData.happy.title}
                  text={easterEggData.happy.text}
                  index={easterEggData.happy.index}
                  image={easterEggData.happy.image}>
                  <span className="cursor-pointer hover:text-secundary transition">
                    Lieblingsprojekte
                  </span>
                </Popup>
              </>
            }
          />

          <section className="project-section mt-12 xxl:max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 md:gap-24">
            {projectsData.map((project) => {
              const isFeatured = project.featured;
              const href = `/projekte/${project.slug}`;

              return (
                <div
                  key={project.slug}
                  className={`col-span-1 w-full ${
                    isFeatured
                      ? "xl:col-span-12 md:col-span-2"
                      : "xl:col-span-6"
                  } flex justify-center`}>
                  <Link href={href} className="flex justify-center">
                    {isFeatured ? (
                      <FeaturedProjectCard
                        title={project.title}
                        type={project.type}
                        summary={project.sections?.[0]?.text}
                        img={project.img1}
                        github={project.github}
                      />
                    ) : (
                      <ProjectCard
                        title={project.title}
                        type={project.type}
                        img={project.img1}
                        github={project.github}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </section>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
