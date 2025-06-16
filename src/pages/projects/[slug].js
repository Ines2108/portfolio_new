// /pages/projects/[slug].js
import Head from "next/head";
import { useRouter } from "next/router";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { projectsData } from "@/data/projectsData";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <div>Projekt nicht gefunden.</div>;

  return (
    <>
      <Head>
        <title>Ines Portfolio | {project.title}</title>
        <meta name="description" content={project.headline} />
      </Head>
      <ProjectDetailLayout {...project} />
    </>
  );
};

export default ProjectPage;
