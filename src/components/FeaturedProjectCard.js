import ProjectCardBase from "./ProjectCardBase";

const FeaturedProjectCard = ({ img, title, type, summary, github }) => {
  return (
    <>
      {/* Large */}
      <ProjectCardBase
        img={img}
        title={title}
        type={type}
        summary={summary}
        github={github}
        showSummary
        visibleClass="hidden xl:flex"
        svgConfig={{
          className: "tech-svg-large",
          viewBox: "-100 0 1860 620",
          path: "M4 500V4H1720V600H204.95",
          strokeWidth: 10,
        }}
        layoutConfig={{
          wrapper: "max-w-[1300px] h-[400px] pl-6 items-center",
          image: "w-[30%] mr-12 mt-16",
          content: "w-[40%] text-justify items-start text-left",
          title: "text-3xl",
          summary: "text-base",
        }}
      />

      {/* Medium */}
      <ProjectCardBase
        img={img}
        title={title}
        type={type}
        summary={summary}
        github={github}
        showSummary
        visibleClass="hidden md:flex xl:hidden"
        svgConfig={{
          className: "tech-svg-medium",
          viewBox: "-40 -10 1380 800",
          path: "M4 400V4H1330V750H150.95",
          strokeWidth: 13,
        }}
        layoutConfig={{
          wrapper: "max-w-[880px] items-center",
          image: "max-w-[320px] mr-6 mt-12",
          content: "w-[35%] text-justify items-start text-left",
          title: "text-2xl",
          summary: "text-sm sm:text-base",
        }}
      />

      {/* Small */}
      <ProjectCardBase
        img={img}
        title={title}
        type={type}
        summary={summary}
        github={github}
        showSummary
        visibleClass="md:hidden"
        svgConfig={{
          className: "tech-svg-small",
          viewBox: "0 0 900 1600",
          path: "M4 650V5H880V1580H100.95",
          strokeWidth: 15,
        }}
        layoutConfig={{
          wrapper: "max-w-[300px] py-6 flex-col items-center",
          image: "max-w-[200px]",
          content: "w-[80%] pr-4 items-end text-right",
          title: "text-xl md:text-2xl",
          summary: "text-sm md:text-base",
        }}
      />
    </>
  );
};

export default FeaturedProjectCard;
