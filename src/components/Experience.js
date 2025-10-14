import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Popup from "./Popup";
import { easterEggData } from "@/data/easterEggData";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const liRef = useRef(null);
  return (
    <li
      ref={liRef}
      className="my-8 font-montserrat first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-start justify-between">
      <LiIcon reference={liRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-base sm:text-xl md:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-secundary capitalize">
            @{company}
          </a>
        </h3>
        <span className="block capitalize text-dark/75 text-xs md:text-base leading-tight mb-2">
          {time} | {address}
        </span>
        <div className="text-xs md:text-base text-muted font-medium font-montserrat leading-relaxed">
          {work.split("<br>").map((line, index) => (
            <p key={index} className="before:content-['•'] before:mr-2">
              {line.trim()}
            </p>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="my-16">
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary font-bold text-center mb-16">
        Meine Praxis-Power
      </h2>
      <div ref={ref} className="w-full mx-auto relative lg:w-[90%] md:w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[20px] top-0 w-[2px] h-full bg-primary origin-top
    md:w-[4px] md:left-9 xs:left-[30px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
          <Details
            position="Online Marketing Managerin"
            company="RIKA Innovative Ofentechnik GmbH"
            companyLink="https://www.rika.at/"
            time="Sep. 2025 - jetzt"
            address="Müllerviertel 20, 4563 Micheldorf"
            work="Planung und Steuerung von Online-Marketing-Kampagnen <br>
Erstellung von Landingpages <br>
Weiterentwicklung des CMS (Craft) <br>
Projektmanagement und Schnittstelle zu externen Agenturen <br>
Enge Zusammenarbeit mit Texter*innen, Grafiker*innen und Web-Developer*innen zur Kampagnenumsetzung <br>
Betreuung und Support der Premium-Store-Betreiber*innen im DACH-Raum sowie im Export"
          />
          <Details
            position="Praktikum Frontend"
            company="Netural GmbH"
            companyLink="https://www.netural.com/"
            time="Aug. 2024 - Dez. 2024"
            address="Peter-Behrens-Platz 2, 4020 Linz"
            work="Entwicklung von Webanwendungen mit Angular, Tailwind und Dcupl <br>
            Intensive Arbeit mit TypeScript, JavaScript und CSS <br>
            Mitwirkung im agilen Projektprozess: von der Konzeption bis zur Koordination und Abstimmung mit dem Kunden"
          />
          <Details
            position="Frontend Developer"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="Okt. 2021 - Aug. 2024"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Implementierung neuer Features für die Firmenwebsite <br>
            Konzeption von Mockups und Umsetzung der Designs <br>
            Betreuung des CMS (Storyblok) und Bugfixing"
          />
          <Details
            position="Prozessoptimiererin Finanzen"
            company="CAP.future GmbH"
            companyLink="https://grandgarage.eu/"
            time="März 2021 - Sept. 2021"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Eigenständige Abwicklung der gesamten Buchhaltung <br>
Analyse und Optimierung interner Finanzprozesse zur Effizienzsteigerung"
          />
          <Details
            position="Bilanzbuchhalterin"
            company="Intersport Austria GmbH"
            companyLink="https://www.intersport.at"
            time="Jan. 2019 - Dez. 2020"
            address="Flugplatzstraße 10, 4600 Wels"
            work="Durchführung der Anlagenbuchhaltung und Umsatzsteuervoranmeldung <br>
        Erstellung von Rohbilanzen von 19 Franchise-Unternehmen <br>
        Schnittstelle zu Steuerberater*innen und Finanzbehörden"
          />
          <Details
            position={
              <>
                <Popup
                  title={easterEggData.travel.title}
                  text={easterEggData.travel.text}
                  index={easterEggData.travel.index}
                  image={easterEggData.travel.image}>
                  <span className="cursor-pointer hover:text-secundary transition">
                    Buchhalterin / Bilanzbuchhalterin
                  </span>
                </Popup>
              </>
            }
            company="Hofer KG"
            companyLink="https://www.hofer.at/de/homepage.html"
            time="Nov. 2015 - Aug. 2018"
            address="Hofer Straße 3, 4642 Sattledt"
            work="Mitarbeit bei der Einführung von SAP S/4HANA und SAP Ariba <br>
            Bearbeitung von Eingangsrechnungen <br>
            Betreuung der internen HOT-Prozesse und Hofer-Direktzustellung"
          />
          <Details
            position="Buchhalterin"
            company="LeitnerLeitner GmbH"
            companyLink="https://www.leitnerleitner.com/leitnerleitner-linz/"
            time="Nov. 2014 - Okt. 2015"
            address="Kapuzinerstraße 38, 4020 Linz"
            work="Durchführung der laufenden Buchhaltung (Eingangs- & Ausgangsrechnungen, Bank, Löhne, Zahllauf) <br>
            Zuständig für die interne Buchhaltung der LeitnerLeitner GmbH"
          />
          <Details
            position="Medizinische Sekretärin"
            company="Klinikum Wels-Grieskirchen"
            companyLink="https://www.klinikum-wegr.at/de"
            time="Nov. 2013 - Juni 2014"
            address="Peter-Behrens-Platz 6, 4020 Linz"
            work="Erstellung medizinischer Dokumente (Arztbriefe, Anamnesen) nach Diktat <br>
            Patientenaufnahme und Administration am Empfang"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
