import ProjectCardBase from "./ProjectCardBase";

const ProjectCard = ({ img, title, type, github }) => {
  return (
    <>
      {/* Large */}
      <ProjectCardBase
        img={img}
        title={title}
        type={type}
        github={github}
        visibleClass="hidden xl:flex"
        svgConfig={{
          className: "projects-svg-large",
          viewBox: "-10 -10 1200 1800",
          path: "M4 650V5H1180V1780H110.95",
          strokeWidth: 25,
        }}
        layoutConfig={{
          wrapper: "w-[380px] h-[475px] items-center mt-6 flex-col gap-6",
          image: "w-full max-w-[320px] z-10",
          content: "max-w-[305px] w-full items-end text-right",
          title: "text-2xl",
        }}
      />

      {/* Medium */}
      <ProjectCardBase
        img={img}
        title={title}
        type={type}
        github={github}
        visibleClass="hidden md:flex xl:hidden"
        svgConfig={{
          className: "projects-svg-medium",
          viewBox: "-30 -10 920 1600",
          path: "M4 650V5H830V1530H100.95",
          strokeWidth: 20,
        }}
        layoutConfig={{
          wrapper: "w-[320px] h-[400px] flex-col mt-6 items-center gap-6",
          image: "w-full max-w-[240px] z-10",
          content: "max-w-[240px] w-full items-end text-righ",
          title: "text-xl md:text-2xl",
        }}
      />

      {/* Small */}
      <ProjectCardBase
        img={img}
        title={title}
        type={type}
        github={github}
        visibleClass="md:hidden"
        svgConfig={{
          className: "projects-svg-small",
          viewBox: "-10 -10 900 1600",
          path: "M4 650V5H880V1580H100.95",
          strokeWidth: 15,
        }}
        layoutConfig={{
          wrapper: "w-[290px] h-[350px] py-6 flex-col items-center",
          image: "max-w-[200px]",
          content: "w-[80%] pr-4 items-end text-right",
          title: "text-xl md:text-2xl",
          summary: "text-sm md:text-base",
        }}
      />
    </>
  );
};

export default ProjectCard;
