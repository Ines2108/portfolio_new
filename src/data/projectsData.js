import bioInformaticsImg from "../../public/images/projects/project-bioinformatics.png";
import bioinformaticsTitlepic from "../../public/images/projects/Bioinformatics-Titlepicture.png";
import bioinformaticsLogo from "../../public/images/projects/Bioinformatics-LogoRedesign.png";
import bioinformaticsStartpage from "../../public/images/projects/Bioinformatics-Startpage.png";
import bioinformaticsDetailpage from "../../public/images/projects/Bioinformatics-Detailpage.png";
import bioinformaticsTeampage from "../../public/images/projects/Bioinformatics-Teampage.png";

export const projectsData = [
  {
    slug: "bioinformatics",
    title: "Relaunch Bioinformatics Website",
    featured: true,
    headline: "Relaunch Bioinformatics Website",
    img1: bioinformaticsTitlepic,
    img2: bioinformaticsLogo,
    img3: bioinformaticsStartpage,
    img4: bioinformaticsDetailpage,
    img5: bioinformaticsTeampage,
    sections: [
      {
        heading: "Projektbeschreibung",
        text: `During my 4th semester, my team and I redesigned the website for the Bioinformatics
      Research Group at FH OÖ Campus Hagenberg using Typo3, improving functionality, usability, and design.
      We also created a new logo to establish a modern and professional visual identity that reflects their innovative work.`,
        imgPosition: "left",
      },
      {
        heading: "Technologien & Umsetzung",
        text: `Die Website wurde mit Typo3, SCSS und Vanilla JS umgesetzt. Fokus lag auf Accessibility, strukturierter Navigation und konsistentem Design.`,
        imgPosition: "right",
      },
    ],
  },
  {
    slug: "video-projekt",
    title: "Kreatives Video-Projekt",
    featured: false,
    headline: "Storytelling durch Video",
    img1: bioInformaticsImg,
    img2: bioInformaticsImg,
    sections: [
      {
        heading: "Idee & Umsetzung",
        text: `Ein kreatives Videoprojekt, das visuelles Storytelling, Schnitttechnik und Musikkomposition vereint. Ich war für Drehbuch, Regie und Schnitt zuständig.`,
        imgPosition: "left",
      },
      {
        heading: "Ergebnis",
        text: `Das Video wurde bei einem Studierenden-Festival gezeigt und erhielt positives Feedback für Dramaturgie und visuelle Umsetzung.`,
        imgPosition: "right",
      },
    ],
  },
  {
    slug: "web-app-dashboard",
    title: "Dashboard für Web App",
    featured: false,
    headline: "Datenvisualisierung für UX",
    img1: bioInformaticsImg,
    img2: bioInformaticsImg,
    sections: [
      {
        heading: "Projektübersicht",
        text: `Entwicklung eines interaktiven Dashboards für ein internes Tool. Fokus lag auf übersichtlicher Darstellung komplexer Daten mit React und Chart.js.`,
        imgPosition: "left",
      },
      {
        heading: "Features",
        text: `Filterbare Diagramme, Darkmode, responsive Layouts und API-Integration. Optimiert für Desktop & Mobile.`,
        imgPosition: "right",
      },
    ],
  },
  {
    slug: "mobile-app-prototype",
    title: "Mobile App Prototyp",
    featured: true,
    headline: "UX Design für Alltagshilfe",
    img1: bioInformaticsImg,
    img2: bioInformaticsImg,
    sections: [
      {
        heading: "Konzept",
        text: `Design eines Prototyps für eine mobile App zur Alltagserleichterung. Fokus auf minimalistischem UI/UX Design mit Figma und Protopie.
        Design eines Prototyps für eine mobile App zur Alltagserleichterung. Fokus auf minimalistischem UI/UX Design mit Figma und Protopie.
        haha haha haha`,
        imgPosition: "left",
      },
      {
        heading: "Test & Feedback",
        text: `In einer Usability-Studie mit 10 Teilnehmenden getestet. Erkenntnisse wurden zur Verbesserung der Navigationsstruktur genutzt.`,
        imgPosition: "right",
      },
    ],
  },
];
