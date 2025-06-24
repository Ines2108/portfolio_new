import bioinformaticsTitlepic from "../../public/images/projects/bioinformatics/Bioinformatics-Titlepicture.png";
import bioinformaticsLogo from "../../public/images/projects/bioinformatics/Bioinformatics-LogoRedesign.png";
import bioinformaticsStartpage from "../../public/images/projects/bioinformatics/Bioinformatics-Startpage.png";
import bioinformaticsDetailpage from "../../public/images/projects/bioinformatics/Bioinformatics-Detailpage.png";
import bioinformaticsTeampage from "../../public/images/projects//bioinformatics/Bioinformatics-Teampage.png";
import kesslerTitlepic from "../../public/images/projects/kessler/Kessler-Titlepicture.png";
import kesslerCustomerJourney from "../../public/images/projects/kessler/Kessler-CustomerJourney.png";
import kesslerQRCode from "../../public/images/projects/kessler/Kessler-QRCode.png";
import kesslerWebsite from "../../public/images/projects/kessler/Kessler-Website.png";
import kesslerSocialMeidaChallenge from "../../public/images/projects/kessler/Kessler-SocialMediaChallenge.png";
import uxTitlepic from "../../public/images/projects/uxlaws/uxTitlepic.png";
import uxLaws from "../../public/images/projects/uxlaws/uxLaws.png";
import uxStartpage from "../../public/images/projects/uxlaws/uxStartpage.png";
import uxMarktplatz from "../../public/images/projects/uxlaws/uxMarktplatz.png";
import uxProfil from "../../public/images/projects/uxlaws/uxProfil.png";
import recoTitlepic from "../../public/images/projects/reco/RecoTitlepic.png";
import recoEinstieg from "../../public/images/projects/reco/RecoEinstieg.png";
import recoAnzeige from "../../public/images/projects/reco/RecoAnzeige.png";
import recoKontaktaufnahme from "../../public/images/projects/reco/RecoKontaktaufnahme.png";
import recoBewertung from "../../public/images/projects/reco/RecoBewertung.png";
import recoGutscheine from "../../public/images/projects/reco/RecoGutscheine.png";
import recoForum from "../../public/images/projects/reco/RecoForum.png";

export const projectsData = [
  {
    slug: "social-awareness-video",
    title: "Social Awareness Video – #savetheorbit",
    featured: true,
    type: "Marketing und Videoproduktion",
    img1: kesslerTitlepic,
    img2: kesslerCustomerJourney,
    img3: kesslerQRCode,
    img4: kesslerWebsite,
    img5: kesslerSocialMeidaChallenge,
    youtube: "https://www.youtube.com/watch?v=PK5-PQICAVA",
    sections: [
      {
        heading: "Worum ging's?",
        text: `Im sechsten Semester entstand im Medienmodul ein Social-Experiment-Video,
        das Aufmerksamkeit auf den Kessler-Effekt (die Anhäufung von Weltraummüll) lenkt. Neben dem Videodreh planten
        wir eine begleitende Awareness-Kampagne mit klaren Zielen und einheitlicher Botschaft.`,
      },
      {
        heading: "Mein Beitrag und Learning",
        text: `Für mich war es unglaublich spannend, den kompletten Videoprozess mitzugestalten:
        vom Konzept über den Drehplan bis zur Kameraarbeit (Handhabung drei Black Magics) und Lichtsetzung. 
        Besonders viel Spaß machte mir aber auch die Kampagnenplanung rund ums Video. Sie war so durchdacht, dass unsere Professor*innen sie vermutlich sofort gelauncht hätten.`,
      },
      {
        heading: "Eingesetzte Technolgien",
        text: `Adobe Premiere Pro`,
      },
    ],
  },
  {
    slug: "relaunch-website",
    title: "Relaunch Bioinformatics Website",
    featured: false,
    type: "Web Development",
    img1: bioinformaticsTitlepic,
    img2: bioinformaticsLogo,
    img3: bioinformaticsStartpage,
    img4: bioinformaticsDetailpage,
    img5: bioinformaticsTeampage,
    link: {
      label: "zur Website",
      href: "https://bioinformatics.fh-hagenberg.at/home",
    },
    sections: [
      {
        heading: "Worum ging's?",
        text: `Im vierten Semester habe ich mit sieben weiteren Studienkolleginnen für die Bioinformatics Research Group Hagenberg
        einen umfassenden Website-Relaunch durchgeführt. Von der Neugestaltung des Logos über
        ein modernes Webdesign bis hin zur technischen Umsetzung mit dem CMS Typo3 war alles dabei.
        Zusätzlich entstanden neue Teamfotos, die das frische Erscheinungsbild abrunden.`,
      },
      {
        heading: "Mein Beitrag und Learning",
        text: `Ich wirkte aktiv an der Gestaltung verschiedener Designvorschläge in Figma mit und
        setzte Komponenten wie die Bildgalerie, den Header sowie die Team- und Publikationssektionen 
        technisch um. Nebenbei sorgte ich mit einer Prise Humor stets für gute Stimmung im Team, 
        denn kreative Köpfe arbeiten am besten mit einem Lächeln.`,
      },
      {
        heading: "Eingesetzte Technolgien",
        text: `Figma, HTML, CSS, Bootstrap, JavaScript, Typo3`,
      },
    ],
  },
  {
    slug: "ux-gesetze",
    title: "Willhaben neu gedacht: Analyse & UX-Makeover",
    featured: false,
    type: "UX/UI",
    img1: uxTitlepic,
    img2: uxLaws,
    img3: uxStartpage,
    img4: uxMarktplatz,
    img5: uxProfil,
    link: {
      label: "zur Figma-Seite",
      href: "https://www.figma.com/design/rRw0GKA8o5skIAA9rz5oaA/Website-Redesign?node-id=73-3253&t=7vZUwCdmMDxsFXGC-1",
    },
    sections: [
      {
        heading: "Worum ging's?",
        text: `Im Rahmen des Wahlfachs UX/UI Psychology im 6. Semester habe ich 32 UX/UI-Gesetze
        kennengelernt, Webseiten analysiert und anhand dieser Prinzipien ein Redesign von ausgewählten
        Willhaben-Seiten erstellt. Ziel war es, Schwächen der aktuellen Umsetzung zu identifizieren und gestalterisch zu verbessern.`,
      },
      {
        heading: "Mein Beitrag und Learning",
        text: `Ich sehe Webseiten seither mit völlig neuen Augen – jedes Detail ist plötzlich erklärbar.
        Besonders spannend: Kaum hatte ich einige Schwächen analysiert, wurden genau diese Elemente
        live auf Willhaben angepasst. Mein Redesign vereint Theorie mit Praxis und zeigt, wie
        man mit gezieltem UX-Wissen spürbare Verbesserungen schafft.`,
      },
      {
        heading: "Eingesetzte Technolgien",
        text: `Figma`,
      },
    ],
  },
  {
    slug: "reco",
    title: "Reco – Nachhaltig helfen, lokal verbinden",
    featured: true,
    type: "Human Computer Interaction",
    img1: recoTitlepic,
    img2: recoEinstieg,
    img3: recoAnzeige,
    img4: recoKontaktaufnahme,
    img5: recoBewertung,
    img6: recoGutscheine,
    img7: recoForum,
    youtube: "https://www.youtube.com/watch?v=_5flTeJG_m0",
    sections: [
      {
        heading: "Worum ging's?",
        text: `Im dritten Semester habe ich gemeinsam mit drei Studienkolleginnen die App „Reco“
        konzipiert – eine Plattform, die Menschen miteinander vernetzt, um Reparaturhilfe im Alltag
        zu ermöglichen. Helferinnen können ihre Fähigkeiten auf Profilen präsentieren, Hilfesuchende posten
        ihre Anliegen mit Text, Bild oder Video. Ein intelligentes Matching bringt beide Seiten
        zusammen – lokal, schnell und nachhaltig. Mit Features wie Belohnungssystem, Forum und 
        Bewertungssystem verfolgt Reco zwei der UN-Nachhaltigkeitsziele (SDG 12 & 13).`,
      },
      {
        heading: "Mein Beitrag und Learning",
        text: `In jeder Projektphase war ich voll involviert. Vom Research über Personas
        bis hin zur Konzeptvalidierung und Prototyp-Erstellung. Besonders begeistert 
        hat mich die Arbeit in Figma, wo ich viel Freude daran hatte, das Design Schritt 
        für Schritt interaktiv umzusetzen. Die Heuristische Evaluation nach Nielsen war ein 
        echtes Aha-Erlebnis und hat mein UX-Verständnis noch einmal geschärft.`,
      },
      {
        heading: "Eingesetzte Technolgien",
        text: `Figma`,
      },
    ],
  },
];
