import bioinformaticsTitlepic from "../../public/images/projects/bioinformatics/Bioinformatics-Titlepicture.jpg";
import bioinformaticsLogo from "../../public/images/projects/bioinformatics/Bioinformatics-LogoRedesign.jpg";
import bioinformaticsStartpage from "../../public/images/projects/bioinformatics/Bioinformatics-Startpage.jpg";
import bioinformaticsDetailpage from "../../public/images/projects/bioinformatics/Bioinformatics-Detailpage.jpg";
import bioinformaticsTeampage from "../../public/images/projects//bioinformatics/Bioinformatics-Teampage.jpg";
import kesslerTitlepic from "../../public/images/projects/kessler/Kessler-Titlepicture.jpg";
import kesslerCustomerJourney from "../../public/images/projects/kessler/Kessler-CustomerJourney.jpg";
import kesslerQRCode from "../../public/images/projects/kessler/Kessler-QRCode.jpg";
import kesslerWebsite from "../../public/images/projects/kessler/Kessler-Website.jpg";
import kesslerSocialMeidaChallenge from "../../public/images/projects/kessler/Kessler-SocialMediaChallenge.jpg";
import uxTitlepic from "../../public/images/projects/uxlaws/uxTitlepic.jpg";
import uxLaws from "../../public/images/projects/uxlaws/uxLaws.jpg";
import uxStartpage from "../../public/images/projects/uxlaws/uxStartpage.jpg";
import uxMarktplatz from "../../public/images/projects/uxlaws/uxMarktplatz.jpg";
import uxProfil from "../../public/images/projects/uxlaws/uxProfil.jpg";
import recoTitlepic from "../../public/images/projects/reco/RecoTitlepic.jpg";
import recoEinstieg from "../../public/images/projects/reco/RecoEinstieg.jpg";
import recoAnzeige from "../../public/images/projects/reco/RecoAnzeige.jpg";
import recoKontaktaufnahme from "../../public/images/projects/reco/RecoKontaktaufnahme.jpg";
import recoBewertung from "../../public/images/projects/reco/RecoBewertung.jpg";
import recoGutscheine from "../../public/images/projects/reco/RecoGutscheine.jpg";
import recoForum from "../../public/images/projects/reco/RecoForum.jpg";
import designThinkingProblemstellung from "../../public/images/projects/designThinking/dtProblemstellung.jpg";
import designThinkingUnderstand from "../../public/images/projects/designThinking/dtUnterstand.jpg";
import designThinkingEmpathize from "../../public/images/projects/designThinking/dtEmpathize.jpg";
import designThinkingDefine1 from "../../public/images/projects/designThinking/dtDefine1.jpg";
import designThinkingDefine2 from "../../public/images/projects/designThinking/dtDefine2.jpg";
import designThinkingIdeate from "../../public/images/projects/designThinking/dtIdeate.jpg";
import designThinkingPrototype from "../../public/images/projects/designThinking/dtPrototype.jpg";
import imagevideoTitlepic from "../../public/images/projects/imagevideo/imagevideoTitlepic.jpg";
import imagevideoSteps from "../../public/images/projects/imagevideo/imagevideoSteps.jpg";
import imagevideoKickOff from "../../public/images/projects/imagevideo/imagevideoKickOff.jpg";
import imagevideoKonzeption from "../../public/images/projects/imagevideo/imagevideoKonzeption.jpg";
import imagevideoPlanung from "../../public/images/projects/imagevideo/imagevideoPlanung.jpg";
import imagevideoDreh from "../../public/images/projects/imagevideo/imagevideoDreh.jpg";
import imagevideoPost from "../../public/images/projects/imagevideo/imagevideoPost.jpg";

export const projectsData = [
  {
    slug: "social-awareness-video",
    title: "Social Awareness Video – #savetheorbit",
    featured: true,
    type: "Marketing und Videoproduktion",
    slug: "social-awareness-video",
    title: "Social Awareness Video – #savetheorbit",
    featured: true,
    type: "Marketing und Videoproduktion",
    img1: {
      ...kesslerTitlepic,
      alt: "Kessler Titlepicture",
    },
    img2: {
      ...kesslerCustomerJourney,
      alt: "Kessler Customer Journey",
    },
    img3: {
      ...kesslerQRCode,
      alt: "Kessler QR Code",
    },
    img4: {
      ...kesslerWebsite,
      alt: "Kessler Website",
    },
    img5: {
      ...kesslerSocialMeidaChallenge,
      alt: "Kessler Social Media Challenge",
    },
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
    slug: "design-thinking-pv-app",
    title: "PV-App neu gedacht",
    featured: false,
    type: "Design Thinking",
    link: {
      label: "zur Canva-Seite",
      href: "https://www.canva.com/design/DAGrvpmfR2E/ywCk8BAwcwK63K6qwqYAQw/edit?utm_content=DAGrvpmfR2E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    img1: {
      ...designThinkingProblemstellung,
      alt: "Design Thinking Problemstellung",
    },
    img2: {
      ...designThinkingUnderstand,
      alt: "Design Thinking Unterstand",
    },
    img3: {
      ...designThinkingEmpathize,
      alt: "Design Thinking Empathize",
    },
    img4: {
      ...designThinkingDefine1,
      alt: "Design Thinking Define Teil 1",
    },
    img5: {
      ...designThinkingDefine2,
      alt: "Design Thinking Define Teil 2",
    },
    img6: {
      ...designThinkingIdeate,
      alt: "Design Thinking Ideate",
    },
    img7: {
      ...designThinkingPrototype,
      alt: "Design Thinking Prototype",
    },
    sections: [
      {
        heading: "Worum ging’s?",
        text: `Im Rahmen eines zweitägigen Design Thinking Workshops haben wir die grundlegenden Prinzipien 
      der Methode kennengelernt und sie direkt auf ein reales Szenario angewendet: Wie kann die Nutzung einer 
      komplexen Home-Energy-Management-App – konkret der PV-App von Fronius – für Endnutzer:innen spannender, 
      intuitiver und motivierender gestaltet werden? Ziel war es, Barrieren abzubauen, Motivation zu fördern 
      und Funktionen an den tatsächlichen Bedürfnissen auszurichten. 
      Zum Abschluss präsentierten wir unsere Lösungsideen in einem Pitch.`,
      },
      {
        heading: "Mein Beitrag und Learning",
        text: `Ich war gemeinsam mit vier Studienkolleg*innen in allen Phasen des Design Thinking Prozesses involviert. Besonders spannend war es, 
      zu erleben, wie sich unsere Motivationskurve während des Prozesses verändert hat: 
      Anfangs sprudelten wir vor Ideen und waren voller Euphorie bis unsere durchgeführten Interviews mit 
      PV-App-Nutzer*innen unsere Annahmen ins Wanken brachten. Viele unserer frühen Ideen waren schlicht 
      an der Realität vorbei gedacht. Das war ein kleiner Dämpfer, aber auch ein wertvoller Aha-Moment. <br>
      
      In der Ideation-Phase fiel es uns anfangs schwer, wirklich frei und außerhalb gewohnter Denkmuster zu 
      denken. Die Aufforderung, „so unrealistisch wie möglich“ zu brainstormen, war zunächst ungewohnt, aber 
      genau das brachte uns letztlich auf eine originelle, nutzerzentrierte Lösung. <br>
      
      Die Motivation stieg spürbar, als wir begannen, unsere Idee in Prototypen zu übersetzen – visuell, greifbar, 
      konkret. Das Ergebnis ist ein durchdachtes, visuelles App-Konzept mit Widgets, Tipps und Belohnungssystemen. 
      Die Auftraggeberin von Fronius war bei der Abschlusspräsentation sichtlich begeistert.`,
      },
      {
        heading: "Eingesetzte Methoden & Tools",
        text: `Qualitative Interviews, Persona-Erstellung, Empathy Mapping, 
      Ideation & Sketching, Prototyping (analog & digital), Canva`,
      },
    ],
  },
  {
    slug: "imagevideo-feuerwehr",
    title: "Imagevideo – Freiwillige Feuerwehr Hagenberg",
    featured: false,
    type: "Videoproduktion",
    img1: {
      ...imagevideoTitlepic,
      alt: "Imagevideo Feuerwehr Titelbild",
    },
    img2: {
      ...imagevideoSteps,
      alt: "Imagevideo Feuerwehr Steps",
    },
    img3: {
      ...imagevideoKickOff,
      alt: "Imagevideo Feuerwehr Kick-Off Moodboard",
    },
    img4: {
      ...imagevideoKonzeption,
      alt: "Imagevideo Feuerwehr Konzeption und Überlegungen",
    },
    img5: {
      ...imagevideoPlanung,
      alt: "Imagevideo Feuerwehr Organisation und Planung",
    },
    img6: {
      ...imagevideoDreh,
      alt: "Imagevideo Feuerwehr Dreh und Produktion",
    },
    img7: {
      ...imagevideoPost,
      alt: "Imagevideo Feuerwehr Postproduktion",
    },
    sections: [
      {
        heading: "Worum ging’s?",
        text: `Im Rahmen unseres Praxisprojektes im 6. Semester produzierten ich und sieben weitere Studienkolleg*innen ein Imagevideo für die Freiwillige Feuerwehr Hagenberg. 
Ziel war es, die Arbeit der Feuerwehr authentisch und ansprechend darzustellen mit dem klaren Fokus, neue Mitglieder*innen zu gewinnen.
      Von der Konzeption über das Drehbuch bis zum finalen Schnitt haben wir als Team alle Schritte eigenständig umgesetzt.`,
      },
      {
        heading: "Mein Beitrag und Learning",
        text: `Meine Rolle lag gemeinsam mit einem Studienkollegen in der Postproduktion – konkret im Videoschnitt, Sounddesign 
      und der visuellen Aufbereitung. Zusätzlich war ich auch beim Action-Dreh verantwortlich für die Technik und unterstützte 
      Kamera- und Setaufbau. Besonders herausfordernd war der Einstieg in die Postproduktion: Wir hatten unglaublich viel Rohmaterial, 
      das uns anfangs ehrlich gesagt etwas überfordert hat. Doch sobald wir den ersten Schnitt angesetzt hatten, kamen wir immer besser 
      in den Flow und es war beeindruckend zu sehen, wie sich aus den vielen einzelnen Fragmenten eine durchdachte, emotionale Geschichte 
      formen ließ.
      Eine spannende Herausforderung war es außerdem, Interviews, Action-Szenen und Musik so aufeinander abzustimmen, dass ein 
      stimmiger Gesamteindruck entsteht.
      Das fertige Video darf aktuell leider noch nicht öffentlich gezeigt werden, da die Feuerwehr es erst im Rahmen ihres Jubiläums 
      im September offiziell präsentiert. <br>
      Aber ich zeig’s gerne bei einem persönlichen Gespräch her. Spoiler: Es ist definitiv einen Blick wert 😉`,
      },
      {
        heading: "Eingesetzte Technologien & Tools",
        text: `Adobe Premiere Pro, Artlist.io (Sound)`,
      },
    ],
  },
  {
    slug: "ux-gesetze",
    title: "Willhaben neu gedacht: Analyse & UX-Makeover",
    featured: true,
    type: "UX/UI",
    img1: {
      ...uxTitlepic,
      alt: "UX Titlepic",
    },
    img2: {
      ...uxLaws,
      alt: "UX Laws",
    },
    img3: {
      ...uxStartpage,
      alt: "UX Startpage",
    },
    img4: {
      ...uxMarktplatz,
      alt: "UX Marktplatz",
    },
    img5: {
      ...uxProfil,
      alt: "UX Profil",
    },
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
    slug: "relaunch-website",
    title: "Relaunch Bioinformatics Website",
    featured: false,
    type: "Web Development",
    img1: {
      ...bioinformaticsTitlepic,
      alt: "Bioinformatics Titlepicture",
    },
    img2: {
      ...bioinformaticsLogo,
      alt: "Bioinformatics Logo Redesign",
    },
    img3: {
      ...bioinformaticsStartpage,
      alt: "Bioinformatics Startpage",
    },
    img4: {
      ...bioinformaticsDetailpage,
      alt: "Bioinformatics Detailpage",
    },
    img5: {
      ...bioinformaticsTeampage,
      alt: "Bioinformatics Teampage",
    },
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
    slug: "reco",
    title: "Reco – Nachhaltig helfen, lokal verbinden",
    featured: false,
    type: "Human Computer Interaction",
    img1: {
      ...recoTitlepic,
      alt: "Reco Titlepic",
    },
    img2: {
      ...recoEinstieg,
      alt: "Reco Einstieg",
    },
    img3: {
      ...recoAnzeige,
      alt: "Reco Anzeige",
    },
    img4: {
      ...recoKontaktaufnahme,
      alt: "Reco Kontaktaufnahme",
    },
    img5: {
      ...recoBewertung,
      alt: "Reco Bewertung",
    },
    img6: {
      ...recoGutscheine,
      alt: "Reco Gutscheine",
    },
    img7: {
      ...recoForum,
      alt: "Reco Forum",
    },
    link: {
      label: "zum Figma-Projekt",
      href: "https://www.figma.com/design/2KtrXqVTQHjVO0Y7LtKlKr/Team-F-Prototype?node-id=0-1&t=UxsAzrRZcCZp9NiD-1",
    },
    youtube: "https://www.youtube.com/watch?v=_5flTeJG_m0",
    sections: [
      {
        heading: "Worum ging's?",
        text: `Im dritten Semester habe ich gemeinsam mit drei Studienkolleg*innen die App „Reco“
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
