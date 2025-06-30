import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LinkedInIcon } from "./Icons";
import LiIcon from "./LiIcon";

const Details = ({ education, school, schoolLink, time, address, note }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 font-montserrat first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="normal-case font-bold text-base sm:text-xl md:text-2xl">
          {education} &nbsp;
          <a
            href={schoolLink}
            target="_blank"
            className="text-secundary capitalize">
            @{school}
          </a>
        </h3>
        <span className="block capitalize text-dark/75 text-xs md:text-base leading-tight mb-2">
          {time} | {address}
        </span>
        <p
          className="w-full font-medium text-xs md:text-base"
          dangerouslySetInnerHTML={{ __html: note }}
        />
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-32 mb-12 md:mb-32">
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-bold text-center mb-16">
        Mein Wissensweg
      </h2>
      <div ref={ref} className="w-full mx-auto relative lg:w-[90%] md:w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[20px] top-0 w-[2px] h-[150%] sm:h-[130%] xxl:h-[165%] bg-primary origin-top
          md:w-[4px] md:left-9 xs:left-[30px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
          <Details
            education="Bachelor of Science in Kommunikation, Wissen, Medien"
            school="FH Hagenberg"
            companyLink="https://fh-ooe.at/campus-hagenberg"
            time="Okt. 2022 - Juli 2025"
            address="Softwarepark 11, 4232 Hagenberg"
            note="Schwerpunkte: Online Marketing, E-Learning, Web Development, Human-Computer-Interaction"
          />
          <Details
            education="Zertifizierung Google Ads-Suchmaschinenwerbung"
            time="Juli 2024 - Juli 2025"
            school="FH Hagenberg"
            companyLink="https://fh-ooe.at/campus-hagenberg"
            address="Softwarepark 11, 4232 Hagenberg"
          />
          <Details
            education="Bilanzbuchhalter- und Buchhalterprüfung"
            time="Okt. 2015 - Juni 2018"
            school="WIFI Wels"
            companyLink="https://www.wifi-ooe.at/"
            address="Dr.-Koss-Straße 4, 4600 Wels"
            note="Beides mit sehr gutem Erfolg abgeschlossen"
          />
          <Details
            education="HAK Matura"
            time="Sept. 2008 - Juni 2013"
            school="Bundeshandelsakademie I Wels"
            companyLink="https://hakwels.at/bildungsangebot/hak/"
            address="Stelzhamerstraße 20, 4600 Wels"
            note="Mit gutem Erfolg abgeschlossen <br>
            Schwerpunkt: Kommunikation und Sozialmanagement"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
