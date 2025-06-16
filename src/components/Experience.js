import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LinkedInIcon } from "./Icons";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 font-sans first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-secundary capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 text-sm md:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16">
      <h2 className="text-5xl md:text-6xl lg:text-8xl text-primary font-bold text-center mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-full mx-auto relative lg:w-[90%] md:w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[20px] top-0 w-[2px] h-full bg-primary origin-top
          md:w-[4px] md:left-9 xs:left-[30px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
          <Details
            position="Intern Frontend"
            company="Netural GmbH"
            companyLink="https://www.netural.com/"
            time="Aug.2024 - Dec. 2024"
            address="Peter-Behrens-Platz 2, 4020 Linz"
            work="I developed web applications using frameworks like Angular, Tailwind, and Dcupl, 
            working extensively with TypeScript, JavaScript, and CSS. As part of a client project, 
            I was involved in the entire agile process, from conceptualization to coordination and collaboration with the client."
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Oct. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementation of new features for the company website, creation of
            mockups, design implementation, CMS management (Storyblok), bug
            fixing"
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Oct. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementation of new features for the company website, creation of
            mockups, design implementation, CMS management (Storyblok), bug
            fixing"
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Oct. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementation of new features for the company website, creation of
            mockups, design implementation, CMS management (Storyblok), bug
            fixing"
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Oct. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementation of new features for the company website, creation of
            mockups, design implementation, CMS management (Storyblok), bug
            fixing"
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Oct. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementation of new features for the company website, creation of
            mockups, design implementation, CMS management (Storyblok), bug
            fixing"
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Oct. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementation of new features for the company website, creation of
            mockups, design implementation, CMS management (Storyblok), bug
            fixing"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
